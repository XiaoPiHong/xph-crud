import { useLayoutEffect } from "react";
import guardDialogScroll from "./dialogScrollEvents";

interface IStyleRecord {
  element: HTMLElement;
  property: string;
  value: string;
  priority: string;
  appliedValue: string;
}

interface IScrollLock {
  count: number;
  release: () => void;
}

const scrollLocks = new WeakMap<HTMLElement, IScrollLock>();

const createScrollLock = (container: HTMLElement, target: HTMLElement) => {
  const document = container.ownerDocument;
  const isBody = container === document.body;
  const styles: IStyleRecord[] = [];
  const elements = [target];
  let bodyOverflowPropagates = false;
  if (isBody && target !== document.body) {
    const bodyStyle = getComputedStyle(document.body);
    if (/auto|scroll|overlay/.test(`${bodyStyle.overflowX} ${bodyStyle.overflowY}`)) {
      const rootStyle = getComputedStyle(document.documentElement);
      bodyOverflowPropagates =
        rootStyle.overflowX === "visible" &&
        rootStyle.overflowY === "visible" &&
        rootStyle.contain === "none" &&
        bodyStyle.contain === "none";
      if (!bodyOverflowPropagates) elements.push(document.body);
    }
    // body 为 visible 时保留其溢出内容，避免 height:100% 的页面被裁剪后跳回原点。
  }
  const positions = elements.map((element) => ({
    element,
    left: element.scrollLeft,
    top: element.scrollTop,
  }));

  const setStyle = (element: HTMLElement, property: string, value: string) => {
    styles.push({
      element,
      property,
      value: element.style.getPropertyValue(property),
      priority: element.style.getPropertyPriority(property),
      appliedValue: value,
    });
    element.style.setProperty(property, value, "important");
  };

  // 经典滚动条隐藏后保留槽位，避免容器内的内容因宽度变化而跳动。
  const computedStyle = getComputedStyle(target);
  const scrollbarWidth = isBody
    ? document.defaultView!.innerWidth - target.clientWidth
    : target.offsetWidth -
      target.clientWidth -
      parseFloat(computedStyle.borderLeftWidth || "0") -
      parseFloat(computedStyle.borderRightWidth || "0");
  if (
    scrollbarWidth > 0 &&
    !computedStyle.getPropertyValue("scrollbar-gutter").includes("stable") &&
    "scrollbarGutter" in target.style
  ) {
    setStyle(target, "scrollbar-gutter", "stable");
  }

  // body 的 overflow 传播给视口时，保留其原本的 visible 使用值。
  // 否则锁定根元素后，height:100% 的 body 会裁掉溢出内容，使页面跳回原点。
  if (bodyOverflowPropagates) {
    setStyle(document.body, "overflow-x", "visible");
    setStyle(document.body, "overflow-y", "visible");
  }

  const visualViewport = document.defaultView?.visualViewport;
  const getOverscrollBehavior = () =>
    (visualViewport?.scale ?? 1) > 1 ? "auto" : "none";

  elements.forEach((element) => {
    setStyle(element, "overflow-x", "hidden");
    setStyle(element, "overflow-y", "hidden");
    setStyle(element, "overscroll-behavior-x", getOverscrollBehavior());
    setStyle(element, "overscroll-behavior-y", getOverscrollBehavior());
    setStyle(element, "scroll-behavior", "auto");
  });

  // 非根容器的 none 也会阻止放大后平移视觉视口，缩回原比例时恢复防滚动链。
  const overscrollStyles = styles.filter((record) =>
    record.property.startsWith("overscroll-behavior-")
  );
  const updateOverscrollBehavior = () => {
    const value = getOverscrollBehavior();
    overscrollStyles.forEach((record) => {
      const { element, property, appliedValue } = record;
      // 与释放锁时一致，宿主主动修改过的样式不再覆盖。
      if (
        element.style.getPropertyValue(property) !== appliedValue ||
        element.style.getPropertyPriority(property) !== "important"
      ) {
        return;
      }
      element.style.setProperty(property, value, "important");
      record.appliedValue = value;
    });
  };
  visualViewport?.addEventListener("resize", updateOverscrollBehavior);

  // hidden 仍可被聚焦或 scrollTo 改变位置，锁定期间保持打开前的偏移。
  const restoreScrollPosition = () => {
    positions.forEach(({ element, left, top }) => {
      const maxLeft = Math.max(0, element.scrollWidth - element.clientWidth);
      const maxTop = Math.max(0, element.scrollHeight - element.clientHeight);
      const nextLeft = Math.max(-maxLeft, Math.min(left, maxLeft));
      const nextTop = Math.max(0, Math.min(top, maxTop));
      if (element.scrollLeft !== nextLeft) element.scrollLeft = nextLeft;
      if (element.scrollTop !== nextTop) element.scrollTop = nextTop;
    });
  };
  restoreScrollPosition();
  const scrollEventTargets: Set<EventTarget> = new Set(elements);
  if (isBody) scrollEventTargets.add(document);
  scrollEventTargets.forEach((eventTarget) => {
    eventTarget.addEventListener("scroll", restoreScrollPosition, { passive: true });
  });
  const removeScrollGuards = guardDialogScroll(container);

  return () => {
    visualViewport?.removeEventListener("resize", updateOverscrollBehavior);
    removeScrollGuards();
    scrollEventTargets.forEach((eventTarget) => {
      eventTarget.removeEventListener("scroll", restoreScrollPosition);
    });
    const restoreStyle = (record: IStyleRecord) => {
      const { element, property, value, priority, appliedValue } = record;
      // 宿主在锁定期间主动更改样式时，不覆盖它的新配置。
      if (
        element.style.getPropertyValue(property) !== appliedValue ||
        element.style.getPropertyPriority(property) !== "important"
      ) {
        return;
      }
      if (value) element.style.setProperty(property, value, priority);
      else element.style.removeProperty(property);
    };
    const restoreRecords = styles.reverse();
    restoreRecords
      .filter((record) => record.property !== "scroll-behavior")
      .forEach(restoreStyle);
    restoreScrollPosition();
    // 偏移恢复完成后再还原 smooth，避免关闭时产生背景滚动动画。
    restoreRecords
      .filter((record) => record.property === "scroll-behavior")
      .forEach(restoreStyle);
  };
};

const retainScrollLock = (container: HTMLElement) => {
  const document = container.ownerDocument;
  const target =
    container === document.body
      ? (document.scrollingElement as HTMLElement) || document.documentElement
      : container;
  let lock = scrollLocks.get(target);
  if (lock) {
    lock.count += 1;
  } else {
    lock = { count: 1, release: createScrollLock(container, target) };
    scrollLocks.set(target, lock);
  }
  const retainedLock = lock;
  return () => {
    retainedLock.count -= 1;
    if (retainedLock.count) return;
    scrollLocks.delete(target);
    retainedLock.release();
  };
};

const useDialogScrollLock = ({
  container,
  mask,
  visible,
}: {
  container: HTMLElement;
  mask?: boolean;
  visible: boolean;
}) => {
  useLayoutEffect(() => {
    if (!mask || !visible) return;
    return retainScrollLock(container);
  }, [container, mask, visible]);
};

export default useDialogScrollLock;

import { useLayoutEffect, useState } from "react";
import type { CSSProperties } from "react";
import useDialogScrollLock from "./useDialogScrollLock";

interface ILayerGeometry {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface IPositionRecord {
  count: number;
  originalPosition: string;
  originalPriority: string;
  appliedPriority: string;
}

const positionedContainers = new WeakMap<HTMLElement, IPositionRecord>();

const retainContainerPosition = (container: HTMLElement) => {
  let record = positionedContainers.get(container);

  if (record) {
    record.count += 1;
  } else {
    if (window.getComputedStyle(container).position !== "static") {
      return () => {};
    }

    record = {
      count: 1,
      originalPosition: container.style.getPropertyValue("position"),
      originalPriority: container.style.getPropertyPriority("position"),
      appliedPriority: "",
    };

    container.style.setProperty("position", "relative", record.originalPriority);
    // 兼容宿主样式中 position: static !important 的情况。
    if (window.getComputedStyle(container).position === "static") {
      container.style.setProperty("position", "relative", "important");
    }
    record.appliedPriority = container.style.getPropertyPriority("position");
    positionedContainers.set(container, record);
  }

  const retainedRecord = record;
  return () => {
    retainedRecord.count -= 1;
    if (retainedRecord.count > 0) return;

    positionedContainers.delete(container);
    // 宿主主动修改过定位样式时，保留宿主的设置。
    if (
      container.style.getPropertyValue("position") !== "relative" ||
      container.style.getPropertyPriority("position") !==
        retainedRecord.appliedPriority
    ) {
      return;
    }

    if (retainedRecord.originalPosition) {
      container.style.setProperty(
        "position",
        retainedRecord.originalPosition,
        retainedRecord.originalPriority
      );
    } else {
      container.style.removeProperty("position");
    }
  };
};

const getLayerGeometry = (container: HTMLElement): ILayerGeometry => ({
  left: container.scrollLeft,
  top: container.scrollTop,
  width: container.clientWidth,
  height: container.clientHeight,
});

const useDialogLayer = ({
  container,
  mask,
  visible,
}: {
  container: HTMLElement;
  mask?: boolean;
  visible: boolean;
}): { layerStyle: CSSProperties | undefined } => {
  const isBody = container === document.body;
  const [geometry, setGeometry] = useState(() => getLayerGeometry(container));

  useLayoutEffect(() => {
    // 同容器的所有弹窗共用定位引用，避免带遮罩窗口卸载后影响其他窗口。
    if (isBody) return;
    return retainContainerPosition(container);
  }, [container, isBody]);

  useDialogScrollLock({ container, mask, visible });

  useLayoutEffect(() => {
    if (!mask || isBody) return;

    const updateGeometry = () => {
      const nextGeometry = getLayerGeometry(container);
      setGeometry((previous) =>
        previous.left === nextGeometry.left &&
        previous.top === nextGeometry.top &&
        previous.width === nextGeometry.width &&
        previous.height === nextGeometry.height
          ? previous
          : nextGeometry
      );
    };

    updateGeometry();
    container.addEventListener("scroll", updateGeometry, { passive: true });

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(updateGeometry);
    resizeObserver?.observe(container);
    if (!resizeObserver) window.addEventListener("resize", updateGeometry);

    return () => {
      container.removeEventListener("scroll", updateGeometry);
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener("resize", updateGeometry);
    };
  }, [container, isBody, mask, visible]);

  const layerStyle: CSSProperties | undefined = mask
    ? {
        position: isBody ? "fixed" : "absolute",
        ...(isBody ? { inset: 0 } : geometry),
        zIndex: 999,
        pointerEvents: "none",
        display: visible ? undefined : "none",
      }
    : undefined;

  return { layerStyle };
};

export default useDialogLayer;

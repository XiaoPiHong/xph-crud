import { useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

/** 缓存页面摘除或窗口最小化时保留正文滚动位置，关闭后重新从顶部打开。 */
const useDialogContentScroll = ({
  container,
  contentRef,
  visible,
  minimized,
  containerMeasurable,
}: {
  container: HTMLElement;
  contentRef: RefObject<HTMLDivElement>;
  visible: boolean;
  minimized: boolean;
  containerMeasurable: boolean;
}) => {
  const position = useRef({ left: 0, top: 0 });
  const restorePending = useRef(false);

  useLayoutEffect(() => {
    if (!visible) {
      position.current = { left: 0, top: 0 };
      restorePending.current = false;
      return;
    }

    const content = contentRef.current;
    const view = container.ownerDocument.defaultView;
    if (!content || !view) return;

    let connected = container.isConnected;
    let frame: number | undefined;
    const canMeasure = () =>
      !minimized &&
      containerMeasurable &&
      container.isConnected &&
      content.isConnected &&
      content.clientWidth > 0 &&
      content.clientHeight > 0;

    const applyPosition = () => {
      content.scrollLeft = position.current.left;
      content.scrollTop = position.current.top;
    };

    const restore = () => {
      restorePending.current = true;
      if (!canMeasure()) return;
      applyPosition();
      if (frame !== undefined) return;
      // 再等一次布局完成，期间忽略脱离/隐藏产生的零值 scroll 事件。
      frame = view.requestAnimationFrame(() => {
        frame = undefined;
        if (!canMeasure()) return;
        applyPosition();
        restorePending.current = false;
      });
    };

    const onScroll = () => {
      if (!canMeasure()) {
        restorePending.current = true;
        return;
      }
      if (restorePending.current) return;
      position.current = { left: content.scrollLeft, top: content.scrollTop };
    };

    content.addEventListener("scroll", onScroll, { passive: true });
    const observer = new MutationObserver((records) => {
      const nextConnected = container.isConnected;
      // 同一轮 remove + append 后 isConnected 仍为 true，也需要恢复滚动。
      const removed = records.some((record) =>
        Array.from(record.removedNodes).some(
          (node) => node === container || node.contains(container)
        )
      );
      if (removed || connected !== nextConnected) restore();
      connected = nextConnected;
    });
    observer.observe(container.ownerDocument.documentElement, {
      childList: true,
      subtree: true,
    });
    restore();

    return () => {
      content.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (frame !== undefined) view.cancelAnimationFrame(frame);
    };
  }, [container, contentRef, visible, minimized, containerMeasurable]);
};

export default useDialogContentScroll;

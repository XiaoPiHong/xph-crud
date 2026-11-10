const dialogSelector = ".xph--dialog--wrapper, .xph--dialog--minimize";
const popupSelector = [
  ".ant-select-dropdown",
  ".ant-picker-dropdown",
  ".ant-dropdown",
  ".ant-cascader-dropdown",
  ".ant-tree-select-dropdown",
  ".ant-popover",
  ".ant-mentions-dropdown",
  ".ant-table-filter-dropdown",
  '[role="listbox"]',
  '[role="menu"]',
  '[role="tree"]',
  '[role="dialog"]',
].join(",");

const getTargetElement = (target: EventTarget | null): Element | null =>
  target instanceof Element
    ? target
    : target instanceof Node
    ? target.parentElement
    : null;

/** 阻止遮罩上的滚动及内部滚动到边界后的滚动链。 */
export default function guardDialogScroll(container: HTMLElement): () => void {
  const isBody = container === document.body;
  const keyboardTarget = isBody ? document : container;
  let touchPoint: { x: number; y: number } | undefined;

  const canConsumeScroll = (
    target: EventTarget | null,
    deltaX: number,
    deltaY: number
  ) => {
    const element = getTargetElement(target);
    if (!element || !container.contains(element)) return false;

    // 下拉浮层也可能直接挂在自定义容器中，与弹窗互为兄弟节点。
    const scope =
      element.closest(dialogSelector) || element.closest(popupSelector);
    if (!scope || !container.contains(scope)) return false;

    const horizontal = Math.abs(deltaX) > Math.abs(deltaY);
    const delta = horizontal ? deltaX : deltaY;
    if (!delta) return true;

    for (
      let current: Element | null = element;
      current && current !== container;
      current = current.parentElement
    ) {
      const style = window.getComputedStyle(current);
      const overflow = horizontal ? style.overflowX : style.overflowY;
      if (!/^(auto|scroll|overlay)$/.test(overflow)) continue;

      const maximum = horizontal
        ? current.scrollWidth - current.clientWidth
        : current.scrollHeight - current.clientHeight;
      if (maximum <= 0) continue;

      const position = horizontal ? current.scrollLeft : current.scrollTop;
      if (horizontal && style.direction === "rtl") {
        if (delta > 0 ? position < -0.5 : position > -maximum + 0.5) return true;
      } else if (delta > 0 ? position < maximum - 0.5 : position > 0.5) {
        return true;
      }
    }
    return false;
  };

  const preventScroll = (event: Event) => {
    if (event.cancelable) event.preventDefault();
  };

  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.defaultPrevented) return;
    const horizontalShift = event.shiftKey && !event.deltaX;
    const deltaX = horizontalShift ? event.deltaY : event.deltaX;
    const deltaY = horizontalShift ? 0 : event.deltaY;
    if (!deltaX && !deltaY) return;
    if (!canConsumeScroll(event.target, deltaX, deltaY)) preventScroll(event);
  };

  const onTouchStart = (event: TouchEvent) => {
    const touch = event.touches.length === 1 ? event.touches[0] : undefined;
    touchPoint = touch ? { x: touch.clientX, y: touch.clientY } : undefined;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (event.touches.length !== 1) {
      touchPoint = undefined;
      return;
    }
    const touch = event.touches[0];
    const previous = touchPoint;
    touchPoint = { x: touch.clientX, y: touch.clientY };
    if (!previous || event.defaultPrevented) return;

    // 页面放大后允许单指平移视觉视口；容器滚动仍由滚动锁保持。
    if ((container.ownerDocument.defaultView?.visualViewport?.scale ?? 1) > 1) {
      return;
    }

    const deltaX = previous.x - touch.clientX;
    const deltaY = previous.y - touch.clientY;
    if (!deltaX && !deltaY) return;
    if (!canConsumeScroll(event.target, deltaX, deltaY)) preventScroll(event);
  };

  const onTouchEnd = () => {
    touchPoint = undefined;
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented || event.altKey || event.metaKey) return;
    const target = getTargetElement(event.target);
    if (
      target?.closest("input, textarea, select") ||
      (target instanceof HTMLElement && target.isContentEditable)
    ) {
      return;
    }

    let deltaX = 0;
    let deltaY = 0;
    switch (event.key) {
      case "ArrowLeft":
        deltaX = -1;
        break;
      case "ArrowRight":
        deltaX = 1;
        break;
      case "ArrowUp":
      case "PageUp":
      case "Home":
        deltaY = -1;
        break;
      case "ArrowDown":
      case "PageDown":
      case "End":
        deltaY = 1;
        break;
      case " ":
      case "Spacebar":
        if (target?.closest('button, [role="button"]')) return;
        deltaY = event.shiftKey ? -1 : 1;
        break;
      default:
        return;
    }
    if (!canConsumeScroll(event.target, deltaX, deltaY)) preventScroll(event);
  };

  container.addEventListener("wheel", onWheel, { passive: false });
  container.addEventListener("touchstart", onTouchStart, { passive: true });
  container.addEventListener("touchmove", onTouchMove, { passive: false });
  container.addEventListener("touchend", onTouchEnd, { passive: true });
  container.addEventListener("touchcancel", onTouchEnd, { passive: true });
  keyboardTarget.addEventListener("keydown", onKeyDown as EventListener);

  return () => {
    container.removeEventListener("wheel", onWheel);
    container.removeEventListener("touchstart", onTouchStart);
    container.removeEventListener("touchmove", onTouchMove);
    container.removeEventListener("touchend", onTouchEnd);
    container.removeEventListener("touchcancel", onTouchEnd);
    keyboardTarget.removeEventListener("keydown", onKeyDown as EventListener);
    touchPoint = undefined;
  };
}

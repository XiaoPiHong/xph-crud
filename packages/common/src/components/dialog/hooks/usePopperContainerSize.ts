import { useCallback, useRef } from "react";

/** 带遮罩窗口以覆盖层的可视区域为定位和最大化范围。 */
export interface IContainerSizeTarget {
  clientWidth: number;
  clientHeight: number;
  scrollWidth: number;
  scrollHeight: number;
}

const usePopperContainerSize = ({
  container,
  mask,
}: {
  container: HTMLElement;
  mask?: boolean;
}) => {
  const isBody = container === document.body;
  const getContainerSize = useCallback((): IContainerSizeTarget => {
    const clientWidth = isBody
      ? document.documentElement.clientWidth
      : container.clientWidth;
    const clientHeight = isBody
      ? document.documentElement.clientHeight
      : container.clientHeight;
    return {
      clientWidth,
      clientHeight,
      scrollWidth: mask || isBody ? clientWidth : container.scrollWidth,
      scrollHeight: mask || isBody ? clientHeight : container.scrollHeight,
    };
  }, [container, isBody, mask]);
  const containerSizeTarget: React.MutableRefObject<IContainerSizeTarget> =
    useRef(getContainerSize());

  const setContainerSizeTarget = useCallback(() => {
    const nextSize = getContainerSize();
    // 缓存页面切走时可能脱离 DOM 或被隐藏，零尺寸不是实际的容器缩放。
    // 保留最后一次有效尺寸，切回同一大小时也不重置拖拽、拉伸和最大化状态。
    if (
      !container.isConnected ||
      nextSize.clientWidth <= 0 ||
      nextSize.clientHeight <= 0
    ) {
      return false;
    }
    containerSizeTarget.current = nextSize;
    return true;
  }, [container, getContainerSize]);
  return {
    containerSizeTarget,
    setContainerSizeTarget,
  };
};

export default usePopperContainerSize;

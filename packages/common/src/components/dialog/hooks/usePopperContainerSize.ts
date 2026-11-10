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
      ? mask
        ? document.documentElement.clientWidth
        : window.innerWidth
      : container.clientWidth;
    const clientHeight = isBody
      ? mask
        ? document.documentElement.clientHeight
        : window.innerHeight
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
    containerSizeTarget.current = getContainerSize();
  }, [getContainerSize]);
  return {
    containerSizeTarget,
    setContainerSizeTarget,
  };
};

export default usePopperContainerSize;

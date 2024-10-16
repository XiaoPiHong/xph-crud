import { useRef } from "react";

/** 开启了mask后默认挂载到body，因为mask是固定定位，所以后续的所有计算都是基于innerWidth、innerHeight */
export interface IContainerSizeTarget {
  clientWidth: number;
  clientHeight: number;
  scrollWidth: number;
  scrollHeight: number;
}

const usePopperContainerSize = ({ container }: { container: HTMLElement }) => {
  const isBody = container === document.body;
  const containerSizeTarget: React.MutableRefObject<IContainerSizeTarget> =
    useRef({
      clientWidth: isBody ? window.innerWidth : container.clientWidth,
      clientHeight: isBody ? window.innerHeight : container.clientHeight,
      scrollWidth: isBody ? window.innerWidth : container.scrollWidth,
      scrollHeight: isBody ? window.innerHeight : container.scrollHeight,
    });

  const setContainerSizeTarget = () => {
    containerSizeTarget.current = {
      clientWidth: isBody ? window.innerWidth : container.clientWidth,
      clientHeight: isBody ? window.innerHeight : container.clientHeight,
      scrollWidth: isBody ? window.innerWidth : container.scrollWidth,
      scrollHeight: isBody ? window.innerHeight : container.scrollHeight,
    };
  };
  return {
    containerSizeTarget,
    setContainerSizeTarget,
  };
};

export default usePopperContainerSize;

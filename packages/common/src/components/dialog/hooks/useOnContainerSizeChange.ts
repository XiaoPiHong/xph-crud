import { useEffect, useState, useRef } from "react";
import { IDialogProps } from "../types";
import { usePopperContainerSize } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

const useOnContainerSizeChange = ({
  container,
  dialogProps,
  baseDialogProps,
}: {
  container: HTMLElement;
  dialogProps: IDialogProps;
  baseDialogProps: IDialogProps;
}) => {
  /** 父容器尺寸改变的时候，触发当前记录改变，触发组件render */
  const [parentInitRecord, setParentInitRecord] = useState(0);
  const [, setMeasurementRecord] = useState(0);
  const lastFrameSize = useRef<{ width: number; height: number }>();

  // ======================================================= 一些会受拉伸影响的初始属性 start
  // =================================父容器尺寸的
  const { containerSizeTarget, setContainerSizeTarget } =
    usePopperContainerSize({
      container,
      mask: dialogProps.mask,
    });
  // 可测量状态独立于尺寸变化：缓存页面恢复时只重测内容，不重置窗口。
  const [containerMeasurable, setContainerMeasurable] = useState(
    () =>
      container.isConnected &&
      containerSizeTarget.current.clientWidth > 0 &&
      containerSizeTarget.current.clientHeight > 0
  );

  useEffect(() => {
    let initialize = true;
    const getFrameSize = () => {
      // 滚动条改变客户区，不代表宿主外框缩放。body 以视口外尺寸为准。
      if (container === document.body) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      const { width, height } = container.getBoundingClientRect();
      return { width, height };
    };
    const handleResize = () => {
      const previousSize = containerSizeTarget.current;
      const measurable = setContainerSizeTarget();
      setContainerMeasurable(measurable);
      // 缓存页摘除时保留最后一次有效外框，重挂到同尺寸无需重置窗口。
      if (!measurable) return;

      const nextSize = containerSizeTarget.current;
      const nextFrameSize = getFrameSize();
      const previousFrameSize = lastFrameSize.current;
      lastFrameSize.current = nextFrameSize;
      if (
        initialize ||
        !previousFrameSize ||
        previousFrameSize.width !== nextFrameSize.width ||
        previousFrameSize.height !== nextFrameSize.height
      ) {
        initialize = false;
        setParentInitRecord((prevRecord) => prevRecord + 1);
        return;
      }

      // 滚动条占位或内容增长仍更新布局约束、拖拽范围，但不重新居中。
      if (
        previousSize.clientWidth !== nextSize.clientWidth ||
        previousSize.clientHeight !== nextSize.clientHeight ||
        previousSize.scrollWidth !== nextSize.scrollWidth ||
        previousSize.scrollHeight !== nextSize.scrollHeight
      ) {
        setMeasurementRecord((record) => record + 1);
      }
    };
    // 首次挂载或切换容器、遮罩模式时，按新的测量基准初始化。
    handleResize();
    window.addEventListener("resize", handleResize);
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(handleResize);
    resizeObserver?.observe(
      container === document.body ? document.documentElement : container
    );
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [container, dialogProps.mask, containerSizeTarget, setContainerSizeTarget]);

  //=================================尺寸的
  const { width: baseWidth, height: baseHeight } = baseDialogProps;
  const { width, height } = dialogProps;

  const curWidth = width ? width : baseWidth;
  const curHeight = height ? height : baseHeight;

  const { clientWidth, clientHeight } = containerSizeTarget.current;
  const availableWidth = Math.max(0, clientWidth - DIALOG_BOUNDARY_GAP);
  const availableHeight = Math.max(0, clientHeight - DIALOG_BOUNDARY_GAP);
  const curPropsWidth = curWidth
    ? curWidth > availableWidth
      ? availableWidth
      : curWidth
    : 0;

  const curPropsHeight = curHeight
    ? curHeight > availableHeight
      ? availableHeight
      : curHeight
    : "unset";

  /**
   * 初始化最大宽度、高度（默认高度是自定义的，但是如果props设置了宽高，则最大宽高不可大于可视区域宽高）
   */
  const initWidth = useRef<number | string>(curPropsWidth);
  const initHeight = useRef<number | string>(curPropsHeight);
  const setInitSize = (size: {
    width: number | string;
    height: number | string;
  }) => {
    initWidth.current = size.width;
    initHeight.current = size.height;
  };

  //=====================================定位的
  /** 初始化位置 */
  const initLeft = useRef<number>(Math.floor(clientWidth / 2));
  const initTop = useRef<number>(Math.floor(clientHeight / 2));
  const setInitPosition = (position: { left: number; top: number }) => {
    initLeft.current = position.left;
    initTop.current = position.top;
  };

  // ======================================================= 一些会受拉伸影响的初始属性 end
  useEffect(() => {
    setInitSize({ width: curPropsWidth, height: curPropsHeight });
    setInitPosition({
      left: Math.floor(clientWidth / 2),
      top: Math.floor(clientHeight / 2),
    });
  }, [parentInitRecord, clientWidth, clientHeight, curPropsWidth, curPropsHeight]);

  return {
    containerSizeTarget,
    containerMeasurable,
    parentInitRecord,
    initLeft,
    initTop,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    setInitPosition,
    setInitSize,
    setParentInitRecord,
  };
};

export default useOnContainerSizeChange;

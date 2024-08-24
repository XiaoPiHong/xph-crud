import { useEffect, useState, useRef } from "react";
import { IDialogProps } from "../types";
import { usePopperContainerSize } from "../hooks";

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
  const [parentResizeRecord, setParentResizeRecord] = useState(0);

  const handleResize = () => {
    setParentResizeRecord((prevRecord) => prevRecord + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ======================================================= 一些会受拉伸影响的初始属性 start
  // =================================父容器尺寸的
  const { containerSizeTarget, setContainerSizeTarget } =
    usePopperContainerSize({
      container,
    });

  //=================================尺寸的
  const { width: baseWidth, height: baseHeight } = baseDialogProps;
  const { width, height } = dialogProps;

  const curWidth = width ? width : baseWidth;
  const curHeight = height ? height : baseHeight;

  const { clientWidth, clientHeight } = containerSizeTarget.current;
  const curPropsWidth = curWidth
    ? curWidth > clientWidth
      ? clientWidth
      : curWidth
    : 0;

  const curPropsHeight = curHeight
    ? curHeight > clientHeight
      ? clientHeight
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
    setContainerSizeTarget();
    setInitSize({ width: curPropsWidth, height: curPropsHeight });
    setInitPosition({
      left: Math.floor(clientWidth / 2),
      top: Math.floor(clientHeight / 2),
    });
  }, [parentResizeRecord]);

  return {
    containerSizeTarget,
    parentResizeRecord,
    initLeft,
    initTop,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    setInitPosition,
    setInitSize,
  };
};

export default useOnContainerSizeChange;

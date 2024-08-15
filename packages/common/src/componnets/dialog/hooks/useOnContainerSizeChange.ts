import { useEffect, useState, useRef } from "react";
import { IDialogProps } from "../types";

const useOnContainerSizeChange = ({
  visible,
  container,
  dialogRef,
  dialogProps,
  baseDialogProps,
}: {
  visible: boolean;
  container: HTMLElement;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogProps: IDialogProps;
  baseDialogProps: IDialogProps;
}) => {
  /** 父容器尺寸改变的时候，触发当前记录改变，触发组件render */
  const [parentResizeRecord, setParentResizeRecord] = useState(0);

  const handleResize = () => {
    console.log("触发了尺寸拉伸============================");
    setParentResizeRecord((prevRecord) => prevRecord + 1);
  };

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => {
      observer.unobserve(container); // 停止观察特定元素
      observer.disconnect(); // 完全停止观察并清除所有已注册的观察目标
    };
  }, [container]);

  // ======================================================= 一些会受拉伸影响的初始属性 start

  //=================================尺寸的
  const { width: baseWidth, height: baseHeight } = baseDialogProps;
  const { width, height } = dialogProps;

  const curWidth = width ? width : baseWidth;
  const curHeight = height ? height : baseHeight;

  /** clientWidth clientHeight 不包括border */
  const { clientWidth, clientHeight } = container;

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

  //=====================================定位的
  /** 初始化位置 */
  const initLeft = useRef<number>(Math.floor(clientWidth / 2));
  const initTop = useRef<number>(Math.floor(clientHeight / 2));

  //=====================================拉伸的
  /** 拉伸的最小尺寸 */
  const minResizeRecord = useRef<null | {
    width: number;
    height: number;
  }>(null);

  // ======================================================= 一些会受拉伸影响的初始属性 end

  useEffect(() => {
    initWidth.current = curPropsWidth;
    initHeight.current = curPropsHeight;
    initLeft.current = Math.floor(clientWidth / 2);
    initTop.current = Math.floor(clientHeight / 2);

    /** 拉伸最小尺寸在打开状态下才需要重新设置 */
    if (visible) {
      const width = dialogRef.current!.offsetWidth;
      const height = dialogRef.current!.offsetHeight;
      minResizeRecord.current = {
        width,
        height,
      };
    }
  }, [parentResizeRecord]);

  return {
    parentResizeRecord,
    initLeft,
    initTop,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    minResizeRecord,
  };
};

export default useOnContainerSizeChange;

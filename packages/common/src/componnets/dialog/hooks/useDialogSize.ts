import { useRef, useState } from "react";
import { IDialogProps } from "../types";
import { IDialogChangeRecord } from "../hooks";

/**
 * @description 首次打开弹窗的时候，限制弹窗的宽高（不得大于弹窗容器可视区域的宽高）
 */
const useDialogInitSize = (
  container: HTMLElement,
  baseDialogProps: IDialogProps,
  dialogProps: IDialogProps,
  setDialogChangeRecord: ({
    left,
    top,
    width,
    height,
  }: IDialogChangeRecord) => void
) => {
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

  /** 实际绑定的宽 */
  const [dialogWidth, setWidth] = useState<number | string>(initWidth.current);
  /** 实际绑定的高 */
  const [dialogHeight, setHeight] = useState<number | string>(
    initHeight.current
  );

  const setDialogSize = ({
    width: newWidth,
    height: newHeight,
  }: {
    width?: number | string;
    height?: number | string;
  }) => {
    setDialogChangeRecord({ width: dialogWidth, height: dialogHeight });
    if (newWidth !== void 0) setWidth(newWidth);
    if (newHeight !== void 0) setHeight(newHeight);
  };

  return {
    dialogWidth,
    dialogHeight,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    setDialogSize,
  };
};
export default useDialogInitSize;

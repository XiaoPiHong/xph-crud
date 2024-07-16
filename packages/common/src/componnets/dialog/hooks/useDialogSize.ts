import { useRef, useEffect, useMemo, useState } from "react";
import { IDialogProps } from "../types";

/**
 *
 * @description 首次打开弹窗的时候，限制弹窗的宽高（不得大于弹窗容器可视区域的宽高）
 */
const useDialogInitSize = (
  baseDialogProps: IDialogProps,
  dialogProps: IDialogProps
) => {
  const { width: baseWidth, height: baseHeight } = baseDialogProps;
  const { width, height, getPopperContainer } = dialogProps;
  /** clientWidth clientHeight 不包括border */
  const container = getPopperContainer!();
  const { clientWidth, clientHeight } = container;

  const curWidth = width ? width : baseWidth;
  const curHeight = height ? height : baseHeight;

  // 初始化最大宽度
  const initWidth = curWidth
    ? curWidth > clientWidth
      ? clientWidth
      : curWidth
    : 0;

  // 初始化最大高度（默认高度是自定义的，但是如果设置了高度则最大高度不得超出可视高度）
  const initHeight = curHeight
    ? curHeight > clientHeight
      ? clientHeight
      : curHeight
    : "unset";

  const [dialogWidth, setWidth] = useState(initWidth);
  const [dialogHeight, setHeight] = useState(initHeight);

  useEffect(() => {
    if (initWidth !== dialogWidth) {
      console.log("重新设置了宽度");
      setWidth(initWidth);
    }
    if (initHeight !== dialogHeight) {
      console.log("重新设置了高度");
      setHeight(initHeight);
    }
  }, [initWidth, initHeight]);

  return {
    dialogWidth,
    dialogHeight,
    setWidth,
    setHeight,
  };
};
export default useDialogInitSize;

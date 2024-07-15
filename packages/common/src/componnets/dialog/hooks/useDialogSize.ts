import { useRef, useEffect, useMemo, useState } from "react";
import { IDialogProps } from "../types";

/**
 *
 * @description 首次打开弹窗的时候，限制弹窗的宽高（不得大于弹窗容器可视区域的宽高）
 */
const useDialogInitSize = (
  baseDialogProps: IDialogProps,
  dialogProps: IDialogProps,
  container: HTMLElement
) => {
  const { width: baseWidth, height: baseHeight } = baseDialogProps;
  const { width, height } = dialogProps;
  /** clientWidth clientHeight 不包括border */
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

  return {
    dialogWidth,
    dialogHeight,
    setWidth,
    setHeight,
  };
};
export default useDialogInitSize;

import { useRef, useEffect } from "react";
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

  const maxWidth = useRef<string | number>(
    curWidth ? (curWidth > clientWidth ? clientWidth : curWidth) : 0
  );

  // 默认高度是自定义的，但是如果设置了高度则最大高度不得超出可视高度
  const maxHeight = useRef<string | number>(
    curHeight ? (curHeight > clientHeight ? clientHeight : curHeight) : "unset"
  );

  // 监听一下宽度的变化
  useEffect(() => {
    if (curWidth && curWidth !== maxWidth.current) {
      maxWidth.current = curWidth > clientWidth ? clientWidth : curWidth;
    }
    if (curHeight && curHeight !== maxHeight.current) {
      maxHeight.current = curHeight > clientHeight ? clientHeight : curHeight;
    }
  }, [curWidth, curHeight]);

  return {
    maxWidth,
    maxHeight,
  };
};
export default useDialogInitSize;

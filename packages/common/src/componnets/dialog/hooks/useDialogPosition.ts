import { useEffect, useState } from "react";
import { IDialogProps } from "../types";

const useDialogPosition = ({
  dialogRef,
  dialogProps,
  visible,
  dialogWidth,
  dialogHeight,
}: {
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogProps: IDialogProps;
  visible: boolean;
  dialogWidth: string | number;
  dialogHeight: string | number;
}) => {
  const [left, seLeft] = useState(0);
  const [top, setTop] = useState(0);

  /** 首次初始化位置（如果传递过来的宽高变动了，需重新计算） */
  useEffect(() => {
    const { getPopperContainer } = dialogProps;
    const container = getPopperContainer!();
    const { clientWidth, clientHeight } = container;
    // 可视区域的50%下取整
    const left = Math.floor(clientWidth / 2);
    const top = Math.floor(clientHeight / 2);
    seLeft(left);
    setTop(top);
    console.log(clientWidth / 2, clientHeight / 2);
    console.log(left, top);
  }, [dialogWidth, dialogHeight]);

  const setDialogPosition = ({
    left,
    top,
  }: {
    left?: number;
    top?: number;
  }) => {
    if (left !== void 0) seLeft(left);
    if (top !== void 0) setTop(top);
  };

  return {
    dialogLeft: left,
    dialogTop: top,
    setDialogPosition,
  };
};

export default useDialogPosition;

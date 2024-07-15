import { useEffect, useState } from "react";
import { IDialogProps } from "../types";

const useDialogPosition = ({
  container,
  dialogRef,
  dialogProps,
  visible,
  dialogWidth,
  dialogHeight,
}: {
  container: HTMLElement;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogProps: IDialogProps;
  visible: boolean;
  dialogWidth: string | number;
  dialogHeight: string | number;
}) => {
  const [left, seLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const { clientWidth, clientHeight } = container;
    const { offsetWidth, offsetHeight } = dialogRef.current!;
    // 可视区域的50%下取整
    const left = Math.floor(clientWidth / 2);
    const top = Math.floor(clientHeight / 2);
    seLeft(left);
    setTop(top);
    console.log(clientWidth / 2, clientHeight / 2);
    console.log(left, top);
  }, [dialogWidth, dialogHeight, visible]);

  return {
    dialogLeft: left,
    dialogTop: top,
  };
};

export default useDialogPosition;

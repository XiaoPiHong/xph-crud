import { useEffect, useState } from "react";
import { IDialogProps } from "../types";

const useDialogPosition = ({
  container,
  dialogRef,
  dialogProps,
  visible,
  setVisible,
  maxWidth,
  maxHeight,
}: {
  container: HTMLElement;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogProps: IDialogProps;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  maxWidth: React.RefObject<string | number>;
  maxHeight: React.RefObject<string | number>;
}) => {
  const [left, seLeft] = useState(0);
  const [top, setTop] = useState(0);
  useEffect(() => {
    const { clientWidth, clientHeight } = container;
    const { offsetWidth, offsetHeight } = dialogRef.current!;
    console.log(offsetWidth, offsetHeight);
  }, [visible]);

  return {};
};

export default useDialogPosition;

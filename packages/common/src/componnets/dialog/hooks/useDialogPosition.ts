import { useState } from "react";
import { IDialogChangeRecord } from "../hooks";

const useDialogPosition = ({
  container,
  setDialogChangeRecord,
}: {
  container: HTMLElement;
  setDialogChangeRecord: ({
    left,
    top,
    width,
    height,
  }: IDialogChangeRecord) => void;
}) => {
  const { clientWidth, clientHeight } = container;
  const initLeft = Math.floor(clientWidth / 2);
  const initTop = Math.floor(clientHeight / 2);

  const [left, seLeft] = useState(initLeft);
  const [top, setTop] = useState(initTop);

  const setDialogPosition = ({
    left: newLeft,
    top: newTop,
  }: {
    left?: number;
    top?: number;
  }) => {
    setDialogChangeRecord({ left, top });
    if (newLeft !== void 0) seLeft(newLeft);
    if (newTop !== void 0) setTop(newTop);
  };

  return {
    dialogLeft: left,
    dialogTop: top,
    setDialogPosition,
  };
};

export default useDialogPosition;

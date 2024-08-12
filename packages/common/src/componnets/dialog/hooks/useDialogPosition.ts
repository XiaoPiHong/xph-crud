import { useState } from "react";
import { IDialogChangeRecord } from "../hooks";

const useDialogPosition = ({
  initLeft,
  initTop,
  setDialogChangeRecord,
}: {
  initLeft: React.MutableRefObject<number>;
  initTop: React.MutableRefObject<number>;
  setDialogChangeRecord: ({
    left,
    top,
    width,
    height,
  }: IDialogChangeRecord) => void;
}) => {
  const [left, seLeft] = useState(initLeft.current);
  const [top, setTop] = useState(initTop.current);

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

import { useState } from "react";

const useDialogPosition = ({ container }: { container: HTMLElement }) => {
  const { clientWidth, clientHeight } = container;
  const initLeft = Math.floor(clientWidth / 2);
  const initTop = Math.floor(clientHeight / 2);

  const [left, seLeft] = useState(initLeft);
  const [top, setTop] = useState(initTop);

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

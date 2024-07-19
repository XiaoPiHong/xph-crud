import { useState, useRef } from "react";
const useMinimizeDialog = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const minimizeRef = useRef<HTMLDivElement>(null);
  const [minimizeVisible, setMinimizeVisible] = useState(false);

  const setMinimizePosition = ({
    left,
    top,
  }: {
    left?: number;
    top?: number;
  }) => {
    if (left !== void 0) setLeft(left);
    if (top !== void 0) setTop(top);
  };

  return {
    minimizeTop: top,
    minimizeLeft: left,
    minimizeRef,
    minimizeVisible,
    setMinimizeVisible,
    setMinimizePosition,
  };
};
export default useMinimizeDialog;

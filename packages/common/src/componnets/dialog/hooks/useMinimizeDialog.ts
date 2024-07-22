import { useState, useRef } from "react";
const useMinimizeDialog = () => {
  /** 这里的初始位置没有设置自适应（目前先写死，如果最小化的宽高改变了，这里也需要调整） */
  const [left, setLeft] = useState(160);
  const [top, setTop] = useState(60);
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

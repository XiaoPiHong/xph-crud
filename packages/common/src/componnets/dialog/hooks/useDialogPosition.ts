import { useEffect, useState } from "react";

const useDialogPosition = ({
  visible,
  container,
  dialogWidth,
  dialogHeight,
}: {
  visible: boolean;
  container: HTMLElement;
  dialogWidth: string | number;
  dialogHeight: string | number;
}) => {
  const [left, seLeft] = useState(0);
  const [top, setTop] = useState(0);

  /** 首次初始化位置（如果传递过来的宽高变动了，需重新计算） */
  useEffect(() => {
    if (visible) {
      const { clientWidth, clientHeight } = container;
      // 可视区域的50%下取整
      const left = Math.floor(clientWidth / 2);
      const top = Math.floor(clientHeight / 2);
      seLeft(left);
      setTop(top);
    }
  }, [visible, dialogWidth, dialogHeight]);

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

import { useState } from "react";

const useDialogZoom = ({
  close,
  setDialogSize,
}: {
  close: () => void;
  setDialogSize: (size: {
    width: number | string;
    height: number | string;
  }) => void;
}) => {
  /** 是否最小化 */
  const [minimizeVisible, setMinimizeVisible] = useState(false);

  /** 是否最大化 */
  const [maximizeVisible, setMaximizeVisible] = useState(false);

  const onMinimize = () => {
    setMinimizeVisible(true);
  };

  /**
   * @param type 触发方
   */
  const onMaximize = (type: "minimize" | "maximize") => {
    setMinimizeVisible(false);
    if (type === "minimize") {
      // 触发方为最小化弹窗时无需做其他操作
    }
    if (type === "maximize") {
      switch (maximizeVisible) {
        case true:
          // 如果当前状态已经是最大化状态，恢复上一次大小
          break;
        case false:
          // 如果当前状态不是最大化状态，设置为最大化状态
          break;
      }
    }
  };

  const onClose = () => {
    setMinimizeVisible(false);
    setMaximizeVisible(false);
    close();
  };

  return {
    minimizeVisible,
    maximizeVisible,
    onMinimize,
    onMaximize,
    onClose,
  };
};

export default useDialogZoom;

import { useState } from "react";
import { IDialogChangeRecord, IContainerSizeTarget } from "../hooks";

const useDialogZoom = ({
  containerSizeTarget,
  dialogChangeRecord,
  close,
  setDialogSize,
  setDialogPosition,
}: {
  containerSizeTarget: React.MutableRefObject<IContainerSizeTarget>;
  dialogChangeRecord: React.MutableRefObject<IDialogChangeRecord>;
  close: () => void;
  setDialogSize: (size: {
    width: number | string;
    height: number | string;
  }) => void;
  setDialogPosition: (position: { left: number; top: number }) => void;
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
    if (type === "minimize") {
      setMinimizeVisible(false);
    }
    if (type === "maximize") {
      // 如果当前状态不是最大化状态，设置为最大化状态（注意这里使用scroll系列的宽高）
      const { scrollWidth, scrollHeight } = containerSizeTarget.current;
      const width = Math.floor(scrollWidth);
      const height = Math.floor(scrollHeight);
      const left = Math.floor(scrollWidth / 2);
      const top = Math.floor(scrollHeight / 2);
      setDialogSize({ width, height } as any);
      setDialogPosition({ top, left } as any);
      setMaximizeVisible(true);
    }
  };

  const onRecovery = () => {
    // 如果当前状态已经是最大化状态，恢复上一次大小，关闭最大化
    const { top, left, width, height } = dialogChangeRecord.current;
    setDialogSize({ width, height } as any);
    setDialogPosition({ top, left } as any);
    setMaximizeVisible(false);
  };

  const onClose = () => {
    setMinimizeVisible(false);
    close();
  };

  return {
    minimizeVisible,
    maximizeVisible,
    setMinimizeVisible,
    setMaximizeVisible,
    onMinimize,
    onMaximize,
    onRecovery,
    onClose,
  };
};

export default useDialogZoom;

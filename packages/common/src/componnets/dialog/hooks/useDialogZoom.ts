import { useState } from "react";
import { IDialogChangeRecord } from "../hooks";

const useDialogZoom = ({
  container,
  dialogChangeRecord,
  close,
  setDialogSize,
  setDialogPosition,
}: {
  container: HTMLElement;
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
      switch (maximizeVisible) {
        case true: {
          // 如果当前状态已经是最大化状态，恢复上一次大小，关闭最大化
          const { top, left, width, height } = dialogChangeRecord.current;
          setDialogSize({ width, height } as any);
          setDialogPosition({ top, left } as any);
          setMaximizeVisible(false);
          break;
        }
        case false: {
          // 如果当前状态不是最大化状态，设置为最大化状态（注意这里使用scroll系列的宽高）
          const { scrollWidth, scrollHeight } = container;
          const width = Math.floor(scrollWidth);
          const height = Math.floor(scrollHeight);
          const left = Math.floor(scrollWidth / 2);
          const top = Math.floor(scrollHeight / 2);
          setDialogSize({ width, height } as any);
          setDialogPosition({ top, left } as any);
          setMaximizeVisible(true);
          break;
        }
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

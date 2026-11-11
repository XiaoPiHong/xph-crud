import { useCallback, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { IDialogChangeRecord, IContainerSizeTarget } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

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
  const [maximizeVisible, updateMaximizeVisible] = useState(false);
  const maximized = useRef(false);
  // 普通拖拽/拉伸会持续更新 dialogChangeRecord，最大化还原使用独立快照。
  const beforeMaximize = useRef<IDialogChangeRecord | null>(null);

  const setMaximizeVisible: Dispatch<SetStateAction<boolean>> = useCallback(
    (next) => {
      const value = typeof next === "function" ? next(maximized.current) : next;
      maximized.current = value;
      // 父容器真正缩放时会重置窗口，同时废弃旧容器下的还原快照。
      if (!value) beforeMaximize.current = null;
      updateMaximizeVisible(value);
    },
    []
  );

  const onMinimize = () => {
    setMinimizeVisible(true);
  };

  /**
   * @param type - 触发方
   */
  const onMaximize = (type: "minimize" | "maximize") => {
    if (type === "minimize") {
      setMinimizeVisible(false);
      return;
    }
    if (type === "maximize") {
      if (maximized.current) return;
      // 如果当前状态不是最大化状态，设置为最大化状态（注意这里使用scroll系列的宽高）
      const { scrollWidth, scrollHeight } = containerSizeTarget.current;
      const width = Math.max(1, scrollWidth - DIALOG_BOUNDARY_GAP);
      const height = Math.max(1, scrollHeight - DIALOG_BOUNDARY_GAP);
      const left = width / 2;
      const top = height / 2;
      setDialogSize({ width, height } as any);
      setDialogPosition({ top, left } as any);
      // 两个 setter 同步记录各自变更前的尺寸和位置，此时复制完整快照。
      beforeMaximize.current = { ...dialogChangeRecord.current };
      setMaximizeVisible(true);
    }
  };

  const onRecovery = () => {
    const snapshot = beforeMaximize.current;
    if (!maximized.current || !snapshot) return;
    // 恢复进入最大化时的尺寸和位置，不受期间的拖拽/拉伸影响。
    const { top, left, width, height } = snapshot;
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

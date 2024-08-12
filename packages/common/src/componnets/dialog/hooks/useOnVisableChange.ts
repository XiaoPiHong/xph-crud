import { useEffect } from "react";

const useOnVisableChange = ({
  visible,
  initWidth,
  initHeight,
  initLeft,
  initTop,
  minResizeRecord,
  dialogRef,
  setDialogSize,
  setDialogPosition,
}: {
  visible: boolean;
  initWidth: React.MutableRefObject<string | number>;
  initHeight: React.MutableRefObject<string | number>;
  initLeft: React.MutableRefObject<number>;
  initTop: React.MutableRefObject<number>;
  minResizeRecord: React.MutableRefObject<{
    width: number;
    height: number;
  } | null>;
  dialogRef: React.RefObject<HTMLDivElement>;
  setDialogSize: (size: {
    width?: number | string;
    height?: number | string;
  }) => void;
  setDialogPosition: (position: { left?: number; top?: number }) => void;
}) => {
  /** 每次关闭都恢复为初始值，避免下次打开闪烁（初始化的时候就会触发一次） */
  useEffect(() => {
    if (!visible) {
      setDialogSize({ width: initWidth.current, height: initHeight.current });
      setDialogPosition({ left: initLeft.current, top: initTop.current });
    }
  }, [visible]);

  useEffect(() => {
    /** 打开弹窗记录当前尺寸（每次打开的时候都以当前打开的宽高为最小大小来限制） */
    if (visible) {
      const width = dialogRef.current!.offsetWidth;
      const height = dialogRef.current!.offsetHeight;
      minResizeRecord.current = {
        width,
        height,
      };
    } else {
      /** 关闭弹窗置空尺寸的记录 */
      minResizeRecord.current = null;
    }
  }, [visible]);
};

export default useOnVisableChange;

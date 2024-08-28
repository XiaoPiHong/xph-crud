import { useEffect, useRef } from "react";
const useMinResizeRecord = (
  visible,
  dialogRef: React.RefObject<HTMLDivElement>,
  dialogWidth: number | string,
  dialogHeight: number | string
) => {
  const minResizeRecord = useRef<null | {
    width: number;
    height: number;
  }>(null);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        /** 拉伸最小尺寸在打开状态下才需要重新设置 */
        const width = dialogRef.current!.offsetWidth;
        const height = dialogRef.current!.offsetHeight;
        minResizeRecord.current = {
          width,
          height,
        };
      }, 0);
    } else {
      minResizeRecord.current = null;
    }
  }, [dialogWidth, dialogHeight, visible]);

  return {
    minResizeRecord,
  };
};
export default useMinResizeRecord;

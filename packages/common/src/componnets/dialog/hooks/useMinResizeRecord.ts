import { isNumber } from "lodash-es";
import { useEffect, useRef } from "react";
const useMinResizeRecord = (
  dialogRef: React.RefObject<HTMLDivElement>,
  contentMaxHeight: number | string,
  visible: boolean
) => {
  const minResizeRecord = useRef<null | {
    width: number;
    height: number;
  }>(null);
  useEffect(() => {
    if (visible) {
      if (isNumber(contentMaxHeight)) {
        /** 拉伸最小尺寸在打开状态下才需要重新设置 */
        if (visible) {
          const width = dialogRef.current!.offsetWidth;
          const height = dialogRef.current!.offsetHeight;
          minResizeRecord.current = {
            width,
            height,
          };
        }
      }
    } else {
      minResizeRecord.current = null;
    }
  }, [contentMaxHeight, visible]);

  return {
    minResizeRecord,
  };
};
export default useMinResizeRecord;

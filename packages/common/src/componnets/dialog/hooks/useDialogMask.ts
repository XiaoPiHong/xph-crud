import { isNumber } from "lodash-es";
import { useState, useEffect } from "react";
const useDialogMask = (contentMaxHeight: number | string, visible: boolean) => {
  const [showMask, setShowMask] = useState<boolean>(false);
  useEffect(() => {
    if (visible) {
      /** contentMaxHeight打开前默认是unset，确保打开完后计算好了contentMaxHeight才显示遮罩层，否者遮罩层width和height不准确（遮罩层会被dialog的content撑大） */
      if (isNumber(contentMaxHeight)) {
        setShowMask(true);
      }
    } else {
      setShowMask(false);
    }
  }, [contentMaxHeight, visible]);

  return {
    showMask,
  };
};
export default useDialogMask;

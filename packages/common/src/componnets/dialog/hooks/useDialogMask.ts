import { isNumber } from "lodash-es";
import { useState, useEffect } from "react";
const useDialogMask = (
  container: HTMLElement,
  contentMaxHeight: number | string,
  dialogWidth: number | string,
  dialogHeight: number | string
) => {
  const [showMask, setShowMask] = useState<boolean>(false);
  const { clientHeight, clientWidth } = container;
  useEffect(() => {
    if (isNumber(contentMaxHeight)) {
      setShowMask(false);
      setTimeout(() => {
        setShowMask(true);
      });
    }
  }, [contentMaxHeight, clientHeight, clientWidth]);
  return {
    showMask,
  };
};
export default useDialogMask;

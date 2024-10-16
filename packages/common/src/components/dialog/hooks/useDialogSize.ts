import { useState } from "react";
import { IDialogChangeRecord } from ".";

const useDialogInitSize = ({
  initWidth,
  initHeight,
  setDialogChangeRecord,
}: {
  initWidth: React.MutableRefObject<string | number>;
  initHeight: React.MutableRefObject<string | number>;
  setDialogChangeRecord: ({
    left,
    top,
    width,
    height,
  }: IDialogChangeRecord) => void;
}) => {
  /** 实际绑定的宽 */
  const [dialogWidth, setWidth] = useState<number | string>(initWidth.current);
  /** 实际绑定的高 */
  const [dialogHeight, setHeight] = useState<number | string>(
    initHeight.current
  );

  const setDialogSize = ({
    width: newWidth,
    height: newHeight,
  }: {
    width?: number | string;
    height?: number | string;
  }) => {
    setDialogChangeRecord({ width: dialogWidth, height: dialogHeight });
    if (newWidth !== void 0) setWidth(newWidth);
    if (newHeight !== void 0) setHeight(newHeight);
  };

  return {
    dialogWidth,
    dialogHeight,
    setDialogSize,
  };
};
export default useDialogInitSize;

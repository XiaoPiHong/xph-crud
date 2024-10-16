import { useRef } from "react";

export interface IDialogChangeRecord {
  left?: number;
  top?: number;
  width?: number | string;
  height?: number | string;
}

const useDialogChangeRecord = () => {
  const dialogChangeRecord = useRef<IDialogChangeRecord>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const setDialogChangeRecord = ({
    left,
    top,
    width,
    height,
  }: IDialogChangeRecord) => {
    const {
      left: oldLeft,
      top: oldTop,
      width: oldWidth,
      height: oldHeight,
    } = dialogChangeRecord.current;

    /** 有传递过来的才合并 */
    dialogChangeRecord.current = {
      left: left ?? oldLeft,
      top: top ?? oldTop,
      width: width ?? oldWidth,
      height: height ?? oldHeight,
    };
  };

  return {
    dialogChangeRecord,
    setDialogChangeRecord,
  };
};

export default useDialogChangeRecord;

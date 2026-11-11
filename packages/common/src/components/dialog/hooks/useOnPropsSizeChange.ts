import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { IDialogProps } from "../types";

const useOnPropsSizeChange = ({
  dialogProps,
  baseDialogProps,
  setParentInitRecord,
}: {
  dialogProps: Pick<IDialogProps, "width" | "height">;
  baseDialogProps: Pick<IDialogProps, "width" | "height">;
  setParentInitRecord: Dispatch<SetStateAction<number>>;
}) => {
  // 只比较调用方设置的尺寸，不能把滚动条引起的 clamp 变化当成 props 修改。
  const width = dialogProps.width ?? baseDialogProps.width;
  const height = dialogProps.height ?? baseDialogProps.height;
  const previousPropsSize = useRef({
    width,
    height,
  });

  /** props的宽高变化,触发重新设置 */
  useEffect(() => {
    const previous = previousPropsSize.current;
    previousPropsSize.current = {
      width,
      height,
    };
    if (width !== previous.width || height !== previous.height) {
      setParentInitRecord((pre) => pre + 1);
    }
  }, [width, height, setParentInitRecord]);
};

export default useOnPropsSizeChange;

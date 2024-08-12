import { useEffect } from "react";

const useOnPropsSizeChange = ({
  initWidth,
  initHeight,
  initLeft,
  initTop,
  curPropsWidth,
  curPropsHeight,
  setDialogSize,
  setDialogPosition,
}: {
  initWidth: React.MutableRefObject<string | number>;
  initHeight: React.MutableRefObject<string | number>;
  initLeft: React.MutableRefObject<number>;
  initTop: React.MutableRefObject<number>;
  curPropsWidth: number | string;
  curPropsHeight: number | string;
  setDialogSize: (size: {
    width?: number | string;
    height?: number | string;
  }) => void;
  setDialogPosition: (position: { left?: number; top?: number }) => void;
}) => {
  /** props的宽高变化,触发重新设置 */
  useEffect(() => {
    if (curPropsWidth !== initWidth.current) {
      console.log("重新设置了宽度");
      setDialogSize({ width: curPropsWidth });
    }
    if (curPropsHeight !== initHeight.current) {
      console.log("重新设置了高度");
      setDialogSize({ height: curPropsHeight });
    }
  }, [curPropsWidth, curPropsHeight]);

  /** props的宽高变化,触发重新设置（位置只能是可视区域中） */
  useEffect(() => {
    if (curPropsWidth !== initWidth.current) {
      console.log("重新设置了左边位置");
      setDialogPosition({ left: initLeft.current });
    }
    if (curPropsHeight !== initHeight.current) {
      console.log("重新设置了上边位置");
      setDialogPosition({ top: initTop.current });
    }
  }, [curPropsWidth, curPropsHeight]);
};

export default useOnPropsSizeChange;

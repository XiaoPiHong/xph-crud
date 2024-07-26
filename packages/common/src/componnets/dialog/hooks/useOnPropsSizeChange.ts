import { useEffect } from "react";

const useOnPropsSizeChange = ({
  visible,
  container,
  initWidth,
  initHeight,
  curPropsWidth,
  curPropsHeight,
  setDialogSize,
  setDialogPosition,
}: {
  visible: boolean;
  container: HTMLElement;
  initWidth: React.MutableRefObject<string | number>;
  initHeight: React.MutableRefObject<string | number>;
  curPropsWidth: number | string;
  curPropsHeight: number | string;
  setDialogSize: (size: {
    width?: number | string;
    height?: number | string;
  }) => void;
  setDialogPosition: (position: { left?: number; top?: number }) => void;
}) => {
  const { clientWidth, clientHeight } = container;
  const initLeft = Math.floor(clientWidth / 2);
  const initTop = Math.floor(clientHeight / 2);

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
      setDialogPosition({ left: initLeft });
    }
    if (curPropsHeight !== initHeight.current) {
      console.log("重新设置了上边位置");
      setDialogPosition({ top: initTop });
    }
  }, [curPropsWidth, curPropsHeight]);

  /** 每次关闭都恢复为初始值，避免下次打开闪烁 */
  useEffect(() => {
    if (!visible) {
      setDialogSize({ width: initWidth.current, height: initHeight.current });
      setDialogPosition({ left: initLeft, top: initTop });
    }
  }, [visible]);
};

export default useOnPropsSizeChange;

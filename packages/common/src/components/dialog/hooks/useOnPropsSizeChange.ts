import { useEffect } from "react";

const useOnPropsSizeChange = ({
  initWidth,
  initHeight,
  curPropsWidth,
  curPropsHeight,
  setParentInitRecord,
}: {
  initWidth: React.MutableRefObject<string | number>;
  initHeight: React.MutableRefObject<string | number>;
  curPropsWidth: number | string;
  curPropsHeight: number | string;
  setParentInitRecord: Function;
}) => {
  /** props的宽高变化,触发重新设置 */
  useEffect(() => {
    if (curPropsWidth !== initWidth.current) {
      console.log("动态设置了宽度");
      setParentInitRecord((pre) => pre + 1);
      return;
    }
    if (curPropsHeight !== initHeight.current) {
      console.log("动态设置了高度");
      setParentInitRecord((pre) => pre + 1);
      return;
    }
  }, [curPropsWidth, curPropsHeight]);
};

export default useOnPropsSizeChange;

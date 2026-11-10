import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";

const useOnPropsSizeChange = ({
  curPropsWidth,
  curPropsHeight,
  setParentInitRecord,
}: {
  curPropsWidth: number | string;
  curPropsHeight: number | string;
  setParentInitRecord: Dispatch<SetStateAction<number>>;
}) => {
  // 初始化尺寸的 ref 会被其他 effect 更新，单独记录上一次 props 以判断变化。
  const previousPropsSize = useRef({
    width: curPropsWidth,
    height: curPropsHeight,
  });

  /** props的宽高变化,触发重新设置 */
  useEffect(() => {
    const previous = previousPropsSize.current;
    previousPropsSize.current = {
      width: curPropsWidth,
      height: curPropsHeight,
    };
    if (
      curPropsWidth !== previous.width ||
      curPropsHeight !== previous.height
    ) {
      setParentInitRecord((pre) => pre + 1);
    }
  }, [curPropsWidth, curPropsHeight, setParentInitRecord]);
};

export default useOnPropsSizeChange;

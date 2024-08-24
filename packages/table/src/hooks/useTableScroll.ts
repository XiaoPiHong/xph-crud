import { useRef, useState, useEffect, useMemo } from "react";
import { TTableProps } from "../types";

export default function useTableScroll(
  tableProps: TTableProps,
  fullHeight?: boolean
) {
  const { scroll, virtual } = tableProps.table!;

  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
      setHeight(divRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const newScroll = useMemo(() => {
    if (fullHeight) {
      /** 官方文档开启虚拟滚动时候，x和y必须是number */
      if (virtual) return { x: width, y: height - 70, ...scroll };
      return { x: "max-content", y: height - 70, ...scroll };
    }
    /** 自适应高度 */
    return {
      x: "max-content",
      ...scroll,
    };
  }, [height]);
  return {
    divRef,
    scroll: newScroll,
  };
}

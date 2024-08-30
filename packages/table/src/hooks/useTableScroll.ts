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
      console.log("触发了table的handleResize");
      setWidth(divRef.current.offsetWidth);
      setHeight(divRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // 会默认触发一次
    // Create a ResizeObserver to monitor the div's size changes
    const observer = new ResizeObserver(handleResize);
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (observer && divRef.current) {
        observer.unobserve(divRef.current);
      }
    };

    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  /** 此处x不能设置为max-content和true否则td会出现被内容撑开的情况，因为加了这两个属性会给元素table加上width:max-content/width:auto导致td无法知道准确的宽度，从而内容会撑开td */
  const newScroll = useMemo(() => {
    if (fullHeight) {
      /** 官方文档开启虚拟滚动时候，x和y必须是number */
      if (virtual) return { x: width, y: height - 70, ...scroll };
      return { y: height - 70, ...scroll };
    }
    /** 自适应高度 */
    return {
      ...scroll,
    };
  }, [height]);
  return {
    divRef,
    scroll: newScroll,
  };
}

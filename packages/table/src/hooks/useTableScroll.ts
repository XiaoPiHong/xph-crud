import { useRef, useState, useLayoutEffect, useMemo, useContext } from "react";
import { ConfigProvider } from "antd";
import { TTableProps } from "../types";

const getChildByClassName = (element: Element | undefined, className: string) =>
  Array.from(element?.children ?? []).find((child) =>
    child.classList.contains(className)
  ) as HTMLElement | undefined;

export default function useTableScroll(
  tableProps: TTableProps,
  fullHeight?: boolean
) {
  const { scroll, virtual, prefixCls } = tableProps.table!;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const tablePrefixCls = getPrefixCls("table", prefixCls);

  const divRef = useRef<HTMLDivElement>(null);
  // 虚拟列表将 0 视为未设置高度，首次测量前也需要有效的滚动范围。
  const [{ width, height }, setSize] = useState({ width: 1, height: 1 });

  useLayoutEffect(() => {
    const container = divRef.current;
    if (!fullHeight || !container) return;

    let frame: number | undefined;
    const observedElements = new Set<Element>();
    const measure = () => {
      const wrapper = container.firstElementChild as HTMLElement | null;
      const table = wrapper?.getElementsByClassName(tablePrefixCls)[0];
      const tableContainer = getChildByClassName(
        table,
        `${tablePrefixCls}-container`
      );
      const header = getChildByClassName(
        tableContainer,
        `${tablePrefixCls}-header`
      );
      const virtualBody = getChildByClassName(
        tableContainer,
        `${tablePrefixCls}-tbody-virtual`
      );
      // 虚拟空表可能暂时使用普通 body；只查主表直属节点，避免选中展开行内的表格。
      const body =
        getChildByClassName(
          virtualBody,
          `${tablePrefixCls}-tbody-virtual-holder`
        ) ??
        getChildByClassName(tableContainer, `${tablePrefixCls}-body`);
      const nextElements = new Set<Element>(
        [container, wrapper, table, header, body].filter(
          (element): element is Element => !!element
        )
      );
      observedElements.forEach((element) => {
        if (!nextElements.has(element)) observer.unobserve(element);
      });
      nextElements.forEach((element) => {
        if (!observedElements.has(element)) observer.observe(element);
      });
      observedElements.clear();
      nextElements.forEach((element) => observedElements.add(element));

      // 整体减去实际滚动区域，得到表头、标题、固定汇总、页脚及边框的占用高度。
      // 原生横向滚动条已包含在 body 高度内，无需再次扣减。
      const fixedHeight =
        wrapper && body ? wrapper.offsetHeight - body.offsetHeight : undefined;
      setSize((previous) => {
        const nextWidth = Math.max(1, container.clientWidth);
        const nextHeight =
          fixedHeight === undefined
            ? previous.height
            : Math.max(1, container.clientHeight - fixedHeight);
        return previous.width === nextWidth && previous.height === nextHeight
          ? previous
          : { width: nextWidth, height: nextHeight };
      });
    };
    const scheduleMeasure = () => {
      if (frame === undefined) {
        frame = requestAnimationFrame(() => {
          frame = undefined;
          measure();
        });
      }
    };
    const observer = new ResizeObserver(scheduleMeasure);
    // 数据加载、隐藏表头或切换虚拟列表时，重新发现被替换的节点。
    const mutationObserver = new MutationObserver(scheduleMeasure);
    mutationObserver.observe(container, { childList: true, subtree: true });
    measure();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [fullHeight, virtual, tablePrefixCls]);

  /** 此处x不能设置为max-content和true否则td会出现被内容撑开的情况，因为加了这两个属性会给元素table加上width:max-content/width:auto导致td无法知道准确的宽度，从而内容会撑开td */
  const newScroll = useMemo(() => {
    if (fullHeight) {
      /** 官方文档开启虚拟滚动时候，x和y必须是number */
      if (virtual) return { x: width, y: height, ...scroll };
      return { y: height, ...scroll };
    }
    /** 自适应高度 */
    return {
      ...scroll,
    };
  }, [fullHeight, virtual, width, height, scroll]);
  return {
    divRef,
    scroll: newScroll,
  };
}

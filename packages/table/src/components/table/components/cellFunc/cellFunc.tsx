import { cellComponentMap } from "./components";
import { ICellFuncProps, IMainProps } from "./types";
import { useExtendTable } from "../../../../hooks";
import { isBoolean } from "lodash-es";

/** 最底层的组件 */
const BottomCellFunc = (
  cellFuncProps: ICellFuncProps,
  mainProps: IMainProps
) => {
  const {
    renderPrams: { text, column },
  } = cellFuncProps;

  const handleText = mainProps?.mainHandleText?.();

  const showTitle = isBoolean(column?.ellipsis)
    ? column?.ellipsis
    : column?.ellipsis?.showTitle;

  return (
    <span
      onClick={mainProps?.mainClick}
      style={mainProps?.mainStyle}
      title={showTitle ? `${handleText ?? text}` : void 0}
    >
      {handleText ?? text}
    </span>
  );
};

/** CellFunc需循环处理组件(这个是一个遍历的组件) */
const CellFunc = (props: ICellFuncProps) => {
  /** 扩展用户自定义的组件 */
  const { setExtendTableCellComp } = useExtendTable();
  setExtendTableCellComp(cellComponentMap);

  const { dslConfig } = props;

  /** 最底层组件 */
  let CurrentComponent = BottomCellFunc.bind(null, props);
  let dslIndex = 0;
  while (dslIndex < dslConfig.length) {
    const i = dslIndex++;

    // 目前是从第一个开始处理，渲染从最后一个开始渲染；i改成dslConfig.length - i - 1可从最后一个开始处理，渲染就变成从第一个开始渲染
    const Component = cellComponentMap[dslConfig[i].component];
    // 避免匹配不到.
    if (!Component) continue;

    // 处理完后将结果丢给下一个组件
    CurrentComponent = (Component.Comp as any).bind(null, CurrentComponent, {
      curComponentProps: dslConfig[i].componentProps || {},
      cellFuncProps: props,
    });
  }

  return <CurrentComponent />;
};

export default CellFunc;

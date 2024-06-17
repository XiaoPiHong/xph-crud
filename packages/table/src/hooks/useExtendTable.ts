import { useXphExtendCompProps } from "xph-crud/common";

const useExtendTable = () => {
  const { extendProps, extendComp } = useXphExtendCompProps();

  const setExtendTableCellComp = (componentMap: { [key: string]: any }) => {
    const cellComp = extendComp?.tableCellFunc;
    if (cellComp) {
      Object.keys(cellComp).forEach((key) => {
        const comp = cellComp[key];
        componentMap[key] = {
          Comp: comp,
        };
      });
    }
  };
  return {
    extendTableProps: extendProps?.table,
    setExtendTableCellComp,
  };
};

export default useExtendTable;

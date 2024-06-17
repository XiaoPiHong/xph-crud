import { forwardRef, useRef, useImperativeHandle, ForwardedRef } from "react";
import { TTableProps, TTableActionType, TDataSourceItem } from "./types";
import SearchForm from "./components/searchForm";
import { useSearchForm, useTableProps } from "./hooks";
import Table from "./components/table";
import style from "./table.module.css";

const XphTable = <T extends TDataSourceItem>(
  props: TTableProps<T>,
  ref: ForwardedRef<TTableActionType>
) => {
  const { tableProps } = useTableProps(props);
  const tableRef = useRef<TTableActionType>(null);
  const { searchFormRef, searchFormProps } = useSearchForm(tableProps);
  let { fullHeight } = tableProps.table!;
  const { virtual } = tableProps.table!;
  if (virtual) fullHeight = true;

  useImperativeHandle(ref, () => ({
    ...tableRef.current!,
  }));

  return (
    <div className={fullHeight ? style["xph-table-full-wrapper"] : void 0}>
      <div>
        <SearchForm
          ref={searchFormRef}
          tableRef={tableRef}
          {...searchFormProps!}
        />
      </div>
      <div className={fullHeight ? style["full-wrapper__table"] : void 0}>
        <Table
          ref={tableRef}
          searchFormRef={searchFormRef}
          fullHeight={fullHeight}
          tableProps={tableProps}
        />
      </div>
    </div>
  );
};

const ForwardedXphTable = forwardRef(XphTable) as <
  RecordType extends TDataSourceItem = TDataSourceItem
>(
  props: TTableProps<RecordType> & { ref?: ForwardedRef<TTableActionType> }
) => ReturnType<typeof XphTable>;

export default ForwardedXphTable;

import { forwardRef, useRef, useImperativeHandle, ForwardedRef } from "react";
import { TTableProps, TTableActionType, TDataSourceItem } from "./types";
import SearchForm from "./components/searchForm";
import CrudFormDialog from "./components/crudFormDialog";
import { useSearchForm, useTableProps, useCrudFormDialog } from "./hooks";
import Table from "./components/table";
import style from "./table.module.css";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

const XphTable = <T extends TDataSourceItem>(
  props: TTableProps<T>,
  ref: ForwardedRef<TTableActionType>
) => {
  const { tableProps } = useTableProps(props);
  const tableRef = useRef<TTableActionType>(null);
  const { searchFormRef, searchFormProps } = useSearchForm(tableProps);
  const { crudFormDialogRef, crudFormProps } = useCrudFormDialog(tableProps);
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
      {crudFormProps ? (
        <CrudFormDialog ref={crudFormDialogRef} {...crudFormProps} />
      ) : null}
    </div>
  );
};

const ForwardedXphTable = forwardRef(XphTable) as <
  RecordType extends TDataSourceItem = TDataSourceItem,
  CellFuncExtendPropsMap extends TXphExtendComponentPropsMap = {},
  ActionsExtendPropsMap extends TXphExtendComponentPropsMap = {},
  ToolbarExtendPropsMap extends TXphExtendComponentPropsMap = {},
  FormExtendPropsMap extends TXphExtendComponentPropsMap = {}
>(
  props: TTableProps<
    RecordType,
    CellFuncExtendPropsMap,
    ActionsExtendPropsMap,
    ToolbarExtendPropsMap,
    FormExtendPropsMap
  > & {
    ref?: ForwardedRef<TTableActionType>;
  }
) => ReturnType<typeof XphTable>;

export default ForwardedXphTable;

import { Table as ATable, Pagination as APagination } from "antd";
import { TableRef } from "antd/es/table";
import { RefObject, forwardRef, useImperativeHandle, useRef } from "react";
import {
  TTableProps,
  TSearchFormActionType,
  TApiTableActionType,
} from "../../types";
import {
  useTableColumns,
  useTable,
  useRowSelection,
  useTableScroll,
  useTopToolbar,
} from "../../hooks";
import { XphActions as TopToolbar } from "xph-crud/common";
import style from "./index.module.css";

const Table = forwardRef<
  TApiTableActionType,
  {
    fullHeight?: boolean;
    tableProps: TTableProps;
    searchFormRef: RefObject<TSearchFormActionType>;
  }
>(({ tableProps, searchFormRef, fullHeight }, ref) => {
  const { columns } = useTableColumns(tableProps);
  const tableRef = useRef<TableRef>(null);
  const {
    table,
    pagination,
    firstGetTableData,
    onPaginationChange,
    onAllChange,

    resetData,
    resetAllData,
    reloadData,
  } = useTable(tableProps, searchFormRef);
  const { rowSelection } = useRowSelection(tableProps, table);
  const { divRef, scroll } = useTableScroll(tableProps, fullHeight);
  const { getTopToolbarBindProps } = useTopToolbar(tableProps, table);

  const getTableBindProps = () => {
    const {
      autoRequest,
      api,
      formatDataSource,
      autoPagination,
      columns,
      scroll,
      pagination,
      rowSelection,
      onChange,
      ...rest
    } = tableProps.table!;
    return rest;
  };

  /** 首次请求 */
  firstGetTableData();

  useImperativeHandle(ref, () => ({
    resetData,
    resetAllData,
    reloadData,
    /** 合并一下antd中table实例的方法 */
    ...tableRef.current!,
  }));
  console.log("render Table");
  return (
    <div className={fullHeight ? style["main-container"] : void 0}>
      {/** 操作栏 */}
      <div className={style["container__toolbar"]}>
        <TopToolbar {...getTopToolbarBindProps()} />
      </div>
      {/** 表格 */}
      <div
        ref={divRef}
        className={fullHeight ? style["container__table"] : void 0}
      >
        <ATable
          ref={tableRef}
          {...getTableBindProps()}
          loading={table.model.loading}
          columns={columns}
          dataSource={table.model.dataSource}
          /** 不使用table的分页 */
          pagination={false}
          rowSelection={rowSelection}
          scroll={scroll}
          /** 排序、筛选变化时触发 */
          onChange={onAllChange}
        />
      </div>
      {/** 分页器 */}
      {pagination.show ? (
        <div className={style["container__pagination"]}>
          <APagination
            disabled={table.model.loading}
            {...pagination.model}
            onChange={onPaginationChange}
          />
        </div>
      ) : null}
    </div>
  );
});

export default Table;

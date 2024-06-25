import { TableRef } from "antd/es/table";
import { TSearchFormProps } from "./searchForm";
import { TCrudFormProps } from "./crudForm";
import { TApiTableProps } from "./apiTable";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

/** 行数据 */
export type TDataSourceItem = Record<PropertyKey, any>;

/** 整个组件的配置 */
export type TTableProps<
  /** 行数据类型 */
  RecordType = TDataSourceItem,
  /** 单元格扩展组件props映射 */
  CellFuncExtendPropsMap extends TXphExtendComponentPropsMap = {},
  /** 操作组扩展组件props映射 */
  ActionsExtendPropsMap extends TXphExtendComponentPropsMap = {},
  /** 顶部操作栏扩展组件props映射 */
  ToolbarExtendPropsMap extends TXphExtendComponentPropsMap = {}
> = {
  /** 表格配置 */
  table?: TApiTableProps<
    RecordType,
    CellFuncExtendPropsMap,
    ActionsExtendPropsMap,
    ToolbarExtendPropsMap
  >;
  /** 搜索表单配置项 */
  searchForm?: TSearchFormProps;
  /** 新增 / 修改表单配置项 */
  crudForm?: TCrudFormProps;

  /** 分页改变事件 */
  onPaginationChange?: (page: number, pageSize: number) => void;

  /** 列表选中事件 */
  onRowSelectionChange?: (
    selectedRowKeys: React.Key[],
    selectedRows: RecordType[]
  ) => void;
};

export type TTableActionType = {
  resetAllData: () => Promise<void>;
  resetData: () => Promise<void>;
  reloadData: () => Promise<void>;
} & TableRef;

// export type TRefTable = <RecordType extends TDataSourceItem = TDataSourceItem>(
//   props: React.PropsWithChildren<TTableProps<RecordType>> &
//     React.RefAttributes<TTableActionType | undefined>
// ) => React.ReactElement;

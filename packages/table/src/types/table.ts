import { TSearchFormProps } from "./searchForm";
import { ICrudFormDialogActionType } from "./crudFormDialog";
import { TCrudFormDialogProps } from "./crudFormDialog";
import { TApiTableProps, TApiTableActionType } from "./apiTable";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

/**
 * @description  行数据
 */
export type TDataSourceItem = Record<PropertyKey, any>;

/**
 * @description 整个组件的配置
 */
export type TTableProps<
  // 行数据类型
  RecordType = TDataSourceItem,
  // 单元格扩展组件props映射
  CellFuncExtendPropsMap extends TXphExtendComponentPropsMap = {},
  // 操作组扩展组件props映射
  ActionsExtendPropsMap extends TXphExtendComponentPropsMap = {},
  // 顶部操作栏扩展组件props映射
  ToolbarExtendPropsMap extends TXphExtendComponentPropsMap = {},
  // 表单扩展组件props映射（包括：搜素表单 & 新增/修改表单）
  FormExtendPropsMap extends TXphExtendComponentPropsMap = {}
> = {
  /**
   * 表格配置
   */
  table?: TApiTableProps<
    RecordType,
    CellFuncExtendPropsMap,
    ActionsExtendPropsMap,
    ToolbarExtendPropsMap
  >;
  /**
   * 搜索表单配置项
   */
  searchForm?: TSearchFormProps<FormExtendPropsMap>;

  /**
   * （新增 / 修改）表单弹窗配置项
   */
  crudFormDialog?: TCrudFormDialogProps<FormExtendPropsMap>;

  /**
   * 分页改变事件
   */
  onPaginationChange?: (page: number, pageSize: number) => void;

  /**
   * 列表选中事件
   */
  onRowSelectionChange?: (
    selectedRowKeys: React.Key[],
    selectedRows: RecordType[]
  ) => void;
};

export type TTableActionType = TApiTableActionType & ICrudFormDialogActionType;

import { TableProps, PaginationProps } from "antd";
import { TableRef } from "antd/es/table";
import { TableRowSelection, RowSelectionType } from "antd/lib/table/interface";
import { TDataSourceItem } from "./table";
import { TColumnProps } from "./column";
import { TXphExtendComponentPropsMap, IXphActionsProps } from "xph-crud/common";

export interface IFunctionToolbarParams<T = TDataSourceItem> {
  loading: boolean;
  selection: T[];
}

/**
 * @description 扩展antd table的属性
 */
export type TApiTableProps<
  T = TDataSourceItem,
  J extends TXphExtendComponentPropsMap = {},
  K extends TXphExtendComponentPropsMap = {},
  L extends TXphExtendComponentPropsMap = {}
> = {
  /**
   * 列配置项，默认为`[]`
   */
  columns?: TColumnProps<T, J, K>[];

  /**
   * 首次是否自动请求，默认为`true`
   */
  autoRequest?: boolean;

  /**
   * 获取datasource的api
   */
  api?: (params: any) => Promise<any>;

  /**
   * 格式化返回的datasource
   */
  formatDataSource?: (data: any) => any[];

  /**
   * 是否开启前端自动分页（当api不支持分页时可用）
   */
  autoPagination?: boolean;

  /**
   * 单选 / 多选
   */
  rowSelection?: RowSelectionType | TableRowSelection<T>;

  /**
   * 分页配置（因为分页器是独立出来的，使用table的分页器布局需要修改样式）
   * 默认为`{ pageSize: 20, total: 0, showTotal: (total) => `共：$\\{total\\} 条`, current: 1, pageSizeOptions: [10, 20, 50, 100], showSizeChanger: true, showQuickJumper: true, }`
   */
  pagination?: false | PaginationProps;

  /**
   * 表格撑满父容器（virtual为true时，默认fullHeight为true），默认为`false`
   */
  fullHeight?: boolean;

  /**
   * 顶部操作栏配置，函数时可以传递参数，参数是什么由调用方决定
   */
  toolbar?:
    | IXphActionsProps<L>
    | ((e: IFunctionToolbarParams<T>) => IXphActionsProps<L>);

  /**
   * 分页请求参数中传递到接口的属性名
   * 默认为`{ pageSize: "pageSize", current: "current", }`
   */
  requestFields?: {
    current?: string;
    pageSize?: string;
  };

  /**
   * 响应结果中获取数据的属性名
   * 默认为`{ current: "current", list: "data", total: "total", }`
   */
  responseFields?: {
    current?: string;
    list?: string;
    total?: string;
  };

  /**
   * 排序、筛选变化时触发
   */
  onChange?: (filters: any, sorter: any, extra: any) => void;
} & Omit<
  TableProps<T>,
  // 内部控制的属性/重写的属性
  "rowSelection" | "columns" | "loading" | "dataSource" | "pagination"
>;

export type TApiTableActionType = {
  /**
   * 重置事件（重置页码、表单后重新请求）
   */
  resetAllData: () => Promise<void>;
  /**
   * 重置事件（重置表单后重新请求）
   */
  resetData: () => Promise<void>;
  /**
   * 刷新数据
   */
  reloadData: () => Promise<void>;
} & TableRef;

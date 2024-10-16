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
   * @default []
   * @description 列配置项
   */
  columns?: TColumnProps<T, J, K>[];

  /**
   * @default true
   * @description 首次是否自动请求
   */
  autoRequest?: boolean;

  /**
   * @default -
   * @description 获取datasource的api
   */
  api?: (params: any) => Promise<any>;

  /**
   * @default -
   * @description 格式化返回的datasource
   */
  formatDataSource?: (data: any) => any[];

  /**
   * @default -
   * @description 是否开启前端自动分页（当api不支持分页时可用）
   */
  autoPagination?: boolean;

  /**
   * @default -
   * @description 单选 / 多选
   */
  rowSelection?: RowSelectionType | TableRowSelection<T>;

  /**
   * @default { pageSize: 20, total: 0, showTotal: (total) => `共：${total} 条`, current: 1, pageSizeOptions: [10, 20, 50, 100], showSizeChanger: true, showQuickJumper: true, }
   * @description 分页配置（因为分页器是独立出来的，使用table的分页器布局需要修改样式）
   */
  pagination?: false | PaginationProps;

  /**
   * @default false
   * @description 表格撑满父容器（virtual为true时，默认fullHeight为true）
   */
  fullHeight?: boolean;

  /**
   * @default -
   * @description 顶部操作栏配置，函数时可以传递参数，参数是什么由调用方决定
   */
  toolbar?:
    | IXphActionsProps<L>
    | ((e: IFunctionToolbarParams<T>) => IXphActionsProps<L>);

  /**
   * @default { pageSize: "pageSize", current: "current", }
   * @description 分页请求参数中传递到接口的属性名
   */
  requestFields?: {
    /**
     * @default "current"
     * @description 当前页
     */
    current?: string;

    /**
     * @default "pageSize"
     * @description 当前页大小
     */
    pageSize?: string;
  };

  /**
   * @default { current: "current", list: "data", total: "total", }
   * @description 响应结果中获取数据的属性名
   */
  responseFields?: {
    /**
     * @default "current"
     * @description 当前页
     */
    current?: string;
    /**
     * @default "data"
     * @description 列表
     */
    list?: string;
    /**
     * @default "total"
     * @description 所有页总数
     */
    total?: string;
  };

  /**
   * @default -
   * @description 排序、筛选变化时触发
   */
  onChange?: (filters: any, sorter: any, extra: any) => void;
} & Omit<
  TableProps<T>,
  // 内部控制的属性/重写的属性
  "rowSelection" | "columns" | "loading" | "dataSource" | "pagination"
>;

export type TApiTableActionType = {
  resetAllData: () => Promise<void>;
  resetData: () => Promise<void>;
  reloadData: () => Promise<void>;
} & TableRef;

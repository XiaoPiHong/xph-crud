import { IXphActionsProps, TXphExtendComponentPropsMap } from "xph-crud/common";
import { IComponentColumnProps, TDataSourceItem } from "../../../../../types";

/**
 * @description cellFunc中每一项对应的组件componentProps属性映射
 */
export type TCellComponentPropsMap<
  CellFuncExtendPropsMap extends TXphExtendComponentPropsMap = {},
  ActionsExtendPropsMap extends TXphExtendComponentPropsMap = {}
> = {
  link: {
    /**
     * 超链接，点击超链接跳转
     */
    url?: string;
    /**
     * 点击事件（优先级最高）
     */
    onClick?: () => void;
  };
  actions: IXphActionsProps<ActionsExtendPropsMap>;
  tag: {
    /**
     * 标签的枚举
     */
    enums: Array<{
      label: string;
      value: any;
      config?: {
        color?: string;
      };
    }>;
  };
} & CellFuncExtendPropsMap;

// ============================================================================== TCellProps start ==================================
type Without<T, K> = { [P in Exclude<keyof T, K>]?: never };

type XOR<T extends any[]> = T extends [infer A, infer B, ...infer Rest]
  ? A | B extends object
    ?
        | (Without<A, keyof B> & B)
        | (Without<B, keyof A> & A)
        | XOR<[A | B, ...Rest]>
    : A | B
  : T extends [infer A]
  ? A
  : never;

/**
 * @description cellFunc中每一项的配置
 */
interface ICellProps<
  T extends keyof TCellComponentPropsMap<J, K>,
  J extends TXphExtendComponentPropsMap = {},
  K extends TXphExtendComponentPropsMap = {}
> {
  component: T;
  componentProps?: TCellComponentPropsMap<J, K>[T];
}

type TCellFuncPropsMap<
  J extends TXphExtendComponentPropsMap = {},
  K extends TXphExtendComponentPropsMap = {}
> = {
  [T in keyof TCellComponentPropsMap<J, K>]: ICellProps<T, J, K>;
}[keyof TCellComponentPropsMap<J, K>];

export type TCellProps<
  J extends TXphExtendComponentPropsMap = {},
  K extends TXphExtendComponentPropsMap = {}
> = XOR<[TCellFuncPropsMap<J, K>]>;
// ============================================================================== TCellProps end ===========================================

/**
 * @description CellFunc组件的props
 */
export interface ICellFuncProps<
  // 行数据类型
  T = TDataSourceItem,
  // 单元格的扩展组件props映射
  J extends TXphExtendComponentPropsMap = {},
  // 操作组的扩展组件props映射
  K extends TXphExtendComponentPropsMap = {}
> {
  dslConfig: TCellProps<J, K>[];
  renderPrams: {
    text: any;
    record: T;
    index: number;
    column: Omit<IComponentColumnProps<T, K, K>, "cellFunc">;
  };
}

/**
 * @description cellFunc中每一项对应的组件的props
 */
export interface ICurCellFuncProps<
  J extends TXphExtendComponentPropsMap = {},
  K extends TXphExtendComponentPropsMap = {},
  T extends keyof TCellComponentPropsMap<J, K> = keyof TCellComponentPropsMap<
    J,
    K
  >
> {
  curComponentProps?: TCellComponentPropsMap<J, K>[T];
  cellFuncProps: ICellFuncProps<TDataSourceItem, J, K>;
}

/**
 * @description 因为渲染是从cellFuncs中的最后一项开始的，所以mainClick是排在后面的组件传递到前面的
 * 目的：目的是为了将自定义组件的点击事件交给最底层的组件进行调用
 * 注意：因为多个自定义组件可能都有mainClick，所以也需要保证其他组件的正常调用（即：传递给子组件Comp的时候，需要把父组件传递过来的mainClick给手动执行一下）
 */
export interface IMainProps {
  /**
   * 点击事件
   */
  mainClick?: () => void;
  /**
   * 内容样式
   */
  mainStyle?: React.CSSProperties;
  /**
   * 内容
   */
  mainHandleText?: () => any;
}

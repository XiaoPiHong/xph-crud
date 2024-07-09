import { TActionItemProps } from "./actionItem";
import { ButtonProps } from "antd/lib/button";
import { TXphExtendComponentPropsMap } from "../../../types";

export interface IActionsProps<T extends TXphExtendComponentPropsMap = {}> {
  /** 类型 */
  type?: ButtonProps["type"];
  /** 操作项 */
  items?: TActionItemProps<T>[];
  /** 禁用（items中的componentProps的disabled优先级最高） */
  disabled?: boolean;
  /** 自定义内容（items的优先级高于render） */
  render?: React.ReactElement;
  /** 超过多少个item自动省略，默认是10（其余全部放在一个dropdown中） */
  max?: number;
  /** 是否需要从扩展中继承属性（可能有些特殊情况，不需要使用扩展中的属性） */
  inherit?: boolean;
}

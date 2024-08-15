import { IXphFormProps, IXphFormActionType } from "xph-crud/form";
import {
  TXphExtendComponentPropsMap,
  IXphDialogProps,
  IXphDialogActionType,
} from "xph-crud/common";

export type TCrudFormDialogProps<T extends TXphExtendComponentPropsMap = {}> =
  Omit<IXphDialogProps, "onOk" | "onCancel"> & {
    formProps: IXphFormProps<T>;
    onOk?: ({ values, data }: { values: any; data: any }) => Promise<any>;
    onCancel?: ({ values, data }: { values: any; data: any }) => Promise<any>;
  };

export interface IOpenActionConfig {
  /** 回填表单的内容 */
  data: any;
  /**
   * @description 点击确定的回调(如果弹窗传递了onOk属性就不用传这个了，这个是为了方便所有操作都在open函数中处理)
   * @param values 表单项的值(如果弹窗传递了onCancel属性就不用传这个了，这个是为了方便所有操作都在close函数中处理)
   */
  ok?: ({ values }: { values: any }) => Promise<any>;
  /** 点击取消的回调 */
  cancel?: ({ values }: { values: any }) => Promise<any>;
}

export interface ICrudFormDialogActionType
  extends IXphFormActionType,
    Omit<IXphDialogActionType, "open"> {
  open: (config: IOpenActionConfig) => Promise<void>;
}

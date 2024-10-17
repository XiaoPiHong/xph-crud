import { IXphFormProps, IXphFormActionType } from "xph-crud/form";
import {
  TXphExtendComponentPropsMap,
  IXphDialogProps,
  IXphDialogActionType,
} from "xph-crud/common";

export type TCrudFormDialogProps<T extends TXphExtendComponentPropsMap = {}> =
  Omit<IXphDialogProps, "onOk" | "onCancel"> & {
    /**
     * crud弹窗的form配置
     */
    formProps: IXphFormProps<T>;
    /**
     * crud弹窗点击确定的回调
     */
    onOk?: (event: { values: any; data: any }) => Promise<any>;
    /**
     * crud弹窗点击取消回调
     */
    onCancel?: (event: { values: any; data: any }) => Promise<any>;
  };

export interface IOpenActionConfig {
  /**
   * 回填表单的内容
   */
  data: any;
  /**
   * 点击确定的回调(如果弹窗传递了onOk属性就不用传这个了，这个是为了方便所有操作都在open函数中处理)
   */
  ok?: (event: {
    // 表单项的值
    values: any;
  }) => Promise<any>;
  /**
   * 点击取消的回调(如果弹窗传递了onCancel属性就不用传这个了，这个是为了方便所有操作都在open函数中处理)
   */
  cancel?: (event: {
    // 表单项的值
    values: any;
  }) => Promise<any>;
}

export interface ICrudFormDialogActionType
  extends IXphFormActionType,
    Omit<IXphDialogActionType, "open"> {
  /** 打开crud弹窗 */
  open: (config: IOpenActionConfig) => Promise<void>;
}

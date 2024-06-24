import { IXphFormProps, IXphActionsProps } from "xph-crud";

declare global {
  /** 表单的映射 */
  interface INewXphFormProps extends IXphFormProps<{ MyComponentName: {} }> {}
  /** 操作组的映射 */
  interface INewXphActionsProps
    extends IXphActionsProps<{ MyComponentName: {} }> {}
}

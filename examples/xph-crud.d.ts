import { extend } from "dayjs";
import { IXphFormProps, IXphActionsProps, TXphTableProps } from "xph-crud";

declare global {
  /** 表单的映射 */
  interface INewXphFormProps extends IXphFormProps<{ MyComponentName: {} }> {}
  /** 操作组的映射 */
  interface INewXphActionsProps
    extends IXphActionsProps<{ MyComponentName: {} }> {}
  /** 表格的映射 */
  type TNewXphTableProps<T = unknown> = TXphTableProps<
    T,
    {
      MyCellFuncComponentName: {};
    },
    {
      MyActionsComponentName: {};
    },
    {
      MyToolbarComponentName: {};
    },
    {
      MyFormComponentName: {};
    }
  >;
}

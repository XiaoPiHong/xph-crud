/**
 * xph-crud.d.ts
 */
import { IXphFormProps, IXphActionsProps, TXphTableProps } from "xph-crud";

/** 这是自定义表单项的属性映射，根据自己而定 */
interface MyFormComponentPropsMap {
  MyInput: {
    borderColor?: string;
    onChange?: (...args) => void;
  };
}

/** 若需自己扩展组件，可以在这里声明类型(声明后使用该类型定义变量才能获得扩展的组件类型) */
declare global {
  /** 表单的映射 */
  interface INewXphFormProps extends IXphFormProps<MyFormComponentPropsMap> {}
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
    MyFormComponentPropsMap
  >;
}

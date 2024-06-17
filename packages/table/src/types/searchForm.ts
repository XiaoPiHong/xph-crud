import { IXphFormProps, IXphFormActionType } from "xph-crud/form";

export type TSearchFormActionType = IXphFormActionType & {
  setFormLoading: (loading: boolean) => void;
};

export type TSearchFormProps = IXphFormProps & {
  /** 是否显示搜索 & 重置按钮 */
  showSearch?: boolean;
};

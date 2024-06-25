import { IXphFormProps, IXphFormActionType } from "xph-crud/form";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

export type TSearchFormActionType = IXphFormActionType & {
  setFormLoading: (loading: boolean) => void;
};

export type TSearchFormProps<T extends TXphExtendComponentPropsMap = {}> =
  IXphFormProps<T> & {
    /** 是否显示搜索 & 重置按钮 */
    showSearch?: boolean;
  };

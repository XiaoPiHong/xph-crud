import { IXphFormProps } from "xph-crud/form";
import { TXphExtendComponentPropsMap, IXphDialogProps } from "xph-crud/common";

export type TCrudFormDialogProps<T extends TXphExtendComponentPropsMap = {}> =
  IXphDialogProps & {
    formProps: IXphFormProps<T>;
  };

export interface ICrudFormDialogActionType {}

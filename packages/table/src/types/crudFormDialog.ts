import { IXphFormProps, IXphFormActionType } from "xph-crud/form";
import {
  TXphExtendComponentPropsMap,
  IXphDialogProps,
  IXphDialogActionType,
} from "xph-crud/common";

export type TCrudFormDialogProps<T extends TXphExtendComponentPropsMap = {}> =
  IXphDialogProps & {
    formProps: IXphFormProps<T>;
  };

export interface ICrudFormDialogActionType
  extends IXphFormActionType,
    IXphDialogActionType {
  open: (data?: Record<string, any>) => Promise<void>;
}

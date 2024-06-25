import { IXphFormProps } from "xph-crud/form";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

export type TCrudFormProps<T extends TXphExtendComponentPropsMap = {}> =
  IXphFormProps<T> & {};

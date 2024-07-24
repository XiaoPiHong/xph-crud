import { useRef, ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { ICrudFormDialogActionType, TCrudFormDialogProps } from "../../types";
import {
  XphDialog,
  IXphDialogActionType,
  TXphExtendComponentPropsMap,
} from "xph-crud/common";
import { XphForm, IXphFormActionType } from "xph-crud/form";

const CrudFormDialog = (
  props: TCrudFormDialogProps,
  ref: ForwardedRef<ICrudFormDialogActionType>
) => {
  const formRef = useRef<IXphFormActionType>(null);
  const { formProps } = props;
  const getBindDialogProps = () => {
    const { formProps, ...reset } = props;
    return reset;
  };
  const dialogProps = getBindDialogProps();

  const onOk = () => {};

  const onCancel = () => {};

  useImperativeHandle(ref, () => ({}));

  return (
    <XphDialog {...dialogProps}>
      <XphForm ref={formRef} {...formProps} />
    </XphDialog>
  );
};

const ForwardedCrudFormDialog = forwardRef(CrudFormDialog) as <
  T extends TXphExtendComponentPropsMap = {}
>(
  props: TCrudFormDialogProps<T> & {
    ref?: ForwardedRef<ICrudFormDialogActionType>;
  }
) => ReturnType<typeof CrudFormDialog>;

export default ForwardedCrudFormDialog;

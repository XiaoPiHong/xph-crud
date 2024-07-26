import {
  useRef,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";
import { ICrudFormDialogActionType, TCrudFormDialogProps } from "../../types";
import {
  XphDialog,
  IXphDialogActionType,
  TXphExtendComponentPropsMap,
} from "xph-crud/common";
import { XphForm as Form, IXphFormActionType } from "xph-crud/form";

const XphForm = memo(Form);

const CrudFormDialog = (
  props: TCrudFormDialogProps,
  ref: ForwardedRef<ICrudFormDialogActionType>
) => {
  const dialogRef = useRef<IXphDialogActionType>(null);
  const xphFormRef = useRef<IXphFormActionType>(null);
  const { formProps: xphFormProps } = props;

  const getBindDialogProps = () => {
    const { formProps, ...reset } = props;
    return reset;
  };

  // 由于表单和弹窗都是异步渲染的，所以其内部的方法需要代理一下
  useImperativeHandle(ref, () => ({
    open: (...args) => {
      return dialogRef.current?.open(...args);
    },
    close: (...args) => {
      return dialogRef.current?.close(...args);
    },
    getFieldsValue: (...args) => {
      return xphFormRef.current!.getFieldsValue(...args);
    },
    setFieldsValue: (...args) => {
      return xphFormRef.current!.setFieldsValue(...args);
    },
    resetFields: (...args) => {
      return xphFormRef.current!.resetFields(...args);
    },
    validator: (...args) => {
      return xphFormRef.current!.validator(...args);
    },
    scrollToField: (...args) => {
      return xphFormRef.current!.scrollToField(...args);
    },
  }));

  return (
    <XphDialog {...getBindDialogProps()} ref={dialogRef}>
      <XphForm {...xphFormProps} ref={xphFormRef} />
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

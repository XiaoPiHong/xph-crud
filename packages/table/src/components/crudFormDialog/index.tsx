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

  /** 由于弹窗内容和弹窗本身的渲染都是异步的，所以这里crudFormDialog暴露的方法需代理 */
  useImperativeHandle(ref, () => ({
    open: (...args) => {
      dialogRef.current?.open(...args);
    },
    close: (...args) => {
      dialogRef.current?.close(...args);
    },
    ...xphFormRef.current!,
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

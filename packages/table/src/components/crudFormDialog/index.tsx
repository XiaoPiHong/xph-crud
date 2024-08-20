import {
  useRef,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";
import {
  ICrudFormDialogActionType,
  TCrudFormDialogProps,
  IOpenActionConfig,
} from "../../types";
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

  const bindDialogProps = getBindDialogProps();

  /** 打开时候的配置项 */
  const openConfig = useRef<IOpenActionConfig | null>(null);

  const handleOk = async () => {
    const { onOk, renderFooter } = bindDialogProps;
    dialogRef.current!.setLoading(true);
    if (!renderFooter) {
      const { ok, data } = openConfig.current!;
      /** open中的ok优先级更高 */
      if (ok) {
        xphFormRef.current!.validator().then(async (res) => {
          const result = await ok({
            values: xphFormRef.current!.getFieldsValue(),
          })
            .then((okResult) => {
              return okResult;
            })
            .finally(() => {
              dialogRef.current!.setLoading(false);
            });
          /** 返回false时候不关闭弹窗 */
          if (result === false) return;
          dialogRef.current!.close();
          openConfig.current = null;
        });
        return;
      }
      if (onOk) {
        xphFormRef.current!.validator().then(async (res) => {
          const result = await onOk({
            values: res,
            data,
          })
            .then((onOkResult) => {
              return onOkResult;
            })
            .finally(() => {
              dialogRef.current!.setLoading(false);
            });
          /** 返回false时候不关闭弹窗 */
          if (result === false) return;
          dialogRef.current!.close();
          openConfig.current = null;
        });
        return;
      }
      dialogRef.current!.close();
      openConfig.current = null;
    }
  };

  const handleCancel = async () => {
    const { onCancel, renderFooter } = bindDialogProps;
    if (!renderFooter) {
      const { cancel, data } = openConfig.current!;
      /** open中的cancel优先级更高 */
      if (cancel) {
        const result = await cancel({
          values: xphFormRef.current!.getFieldsValue(true),
        });
        /** 返回false时候不关闭弹窗 */
        if (result === false) return;
        dialogRef.current!.close();
        openConfig.current = null;
        return;
      }
      if (onCancel) {
        const result = await onCancel({
          values: xphFormRef.current!.getFieldsValue(true),
          data,
        });
        /** 返回false时候不关闭弹窗 */
        if (result === false) return;
        dialogRef.current!.close();
        openConfig.current = null;
        return;
      }
      dialogRef.current!.close();
      openConfig.current = null;
    }
  };

  // 由于表单和弹窗都是异步渲染的，所以其内部的方法需要代理一下
  useImperativeHandle(ref, () => ({
    open: (config: IOpenActionConfig) => {
      const { renderFooter } = bindDialogProps;
      !renderFooter && (openConfig.current = config);

      /** 打开弹窗 */
      return dialogRef.current!.open().then(() => {
        /** 回填表单 */
        xphFormRef.current!.setFieldsValue(config.data || {});
      });
    },
    close: (...args) => {
      return dialogRef.current!.close(...args);
    },
    setLoading: (...args) => {
      return dialogRef.current!.setLoading(...args);
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
    <XphDialog
      {...bindDialogProps}
      ref={dialogRef}
      onOk={handleOk}
      onCancel={handleCancel}
    >
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

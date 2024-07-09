import { IDialogProps } from "../types";
import { merge } from "lodash-es";
import { useExtendDialog } from "../hooks";

const useDialogPorps = (dialogProps: IDialogProps) => {
  const { extendDialogProps } = useExtendDialog();

  const baseDialogProps: Partial<IDialogProps> = {
    okText: "确定",
    cancelText: "取消",
  };
  const newDialogProps: IDialogProps = {
    ...merge(merge(baseDialogProps, extendDialogProps), dialogProps),
  };
  return {
    dialogProps: newDialogProps,
  };
};

export default useDialogPorps;

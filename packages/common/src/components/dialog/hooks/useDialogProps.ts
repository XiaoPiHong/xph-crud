import { IDialogProps } from "../types";
import { merge } from "lodash-es";
import { useExtendDialog } from ".";

const useDialogPorps = (dialogProps: IDialogProps) => {
  const { extendDialogProps } = useExtendDialog();

  const baseDialogProps: Partial<IDialogProps> = {
    width: 700,
    okText: "确定",
    cancelText: "取消",
    /** 默认都是挂载在body上 */
    getPopperContainer: () => document.body,
  };

  const newDialogProps: IDialogProps = {
    ...merge(merge(baseDialogProps, extendDialogProps), dialogProps),
  };

  const getPopperContainer = () => {
    /** 开启遮罩层时挂载在body */
    const container = newDialogProps.getPopperContainer!() as HTMLElement;
    return newDialogProps.mask ? document.body : container;
  };
  return {
    dialogProps: {
      ...newDialogProps,
      getPopperContainer,
    },
    baseDialogProps: baseDialogProps,
  };
};

export default useDialogPorps;

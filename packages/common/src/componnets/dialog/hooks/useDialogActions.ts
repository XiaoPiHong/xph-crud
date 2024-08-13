import { IDialogProps } from "../types";

const useDialogActions = (dialogProps: IDialogProps, setVisible: Function) => {
  const { onOpen, onClose } = dialogProps;
  /** open做成promise可以在弹窗渲染完后执行某些操作 */
  const open = (): Promise<void> => {
    return new Promise((resolve) => {
      setVisible(true).finally(() => {
        resolve();
      });
      onOpen && onOpen();
    });
  };
  const close = () => {
    setVisible(false);
    onClose && onClose();
  };
  return {
    open,
    close,
  };
};

export default useDialogActions;

import { IDialogProps } from "../types";

const useDialogActions = (dialogProps: IDialogProps) => {
  const { onOpen, onClose } = dialogProps;

  const open = () => {
    onOpen && onOpen();
  };
  const close = () => {
    onClose && onClose();
  };
  return {
    open,
    close,
  };
};

export default useDialogActions;

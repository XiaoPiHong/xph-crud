import { IDialogProps } from "../types";

const useDialogActions = (
  dialogProps: IDialogProps,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { onOpen, onClose } = dialogProps;

  const open = () => {
    setVisible(true);
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

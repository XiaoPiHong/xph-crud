import { IDialogProps } from "../types";

const useDialogActions = (
  visible: boolean,
  dialogProps: IDialogProps,
  setVisible: Function,
  setLoading: Function
) => {
  const { onOpen, onClose } = dialogProps;
  /** open做成promise可以在弹窗渲染完后执行某些操作（比如增删改查表单的内容回填） */
  const open = async () => {
    if (visible) return;
    if (onOpen) onOpen(); // 调用 onOpen 不需要等待 setVisible

    await setVisible(true); // 等待 setVisible 完成
  };
  const close = () => {
    setVisible(false);
    setLoading(false);
    onClose && onClose();
  };

  return {
    open,
    close,
  };
};

export default useDialogActions;

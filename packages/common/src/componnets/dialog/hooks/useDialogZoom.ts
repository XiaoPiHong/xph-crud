const useDialogZoom = ({
  close,
  setMinimizeVisible,
}: {
  close: () => void;
  setMinimizeVisible: (visible: boolean) => void;
}) => {
  const onMinimize = () => {
    setMinimizeVisible(true);
  };

  const onMaximize = () => {
    setMinimizeVisible(false);
  };

  const onClose = () => {
    setMinimizeVisible(false);
    close();
  };

  return {
    onMinimize,
    onMaximize,
    onClose,
  };
};

export default useDialogZoom;

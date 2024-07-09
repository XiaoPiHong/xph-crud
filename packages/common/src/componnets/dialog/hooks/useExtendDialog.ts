import { useXphExtendCompProps } from "../../../../";

const useExtendDialog = () => {
  const { extendProps } = useXphExtendCompProps();

  return {
    extendDialogProps: extendProps?.dialog,
  };
};
export default useExtendDialog;

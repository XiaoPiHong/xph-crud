import { useXphExtendCompProps } from "../../../hooks";

const useExtendAuth = () => {
  const { extendProps } = useXphExtendCompProps();

  return {
    extendAuthProps: extendProps?.auth,
  };
};

export default useExtendAuth;

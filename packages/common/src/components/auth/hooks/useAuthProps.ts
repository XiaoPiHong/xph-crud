import { IAuthProps } from "../types";
import { merge } from "lodash-es";
import { useExtendAuth } from ".";

export default function useActionsProps(props: Omit<IAuthProps, "children">) {
  const { extendAuthProps } = useExtendAuth();

  const baseAuthProps = {
    auth: (key) => false /** 默认都是不显示的，方便调试 */,
  };

  const newAuthProps: Omit<IAuthProps, "children"> = {
    ...merge(merge(baseAuthProps, extendAuthProps), props),
  };

  return {
    authProps: newAuthProps,
  };
}

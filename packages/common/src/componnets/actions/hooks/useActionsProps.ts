import { IActionsProps } from "../types";
import { merge } from "lodash-es";
import { useExtendActions } from "../hooks";
import { TXphExtendComponentPropsMap } from "../../../types";

export default function useActionsProps<T extends TXphExtendComponentPropsMap>(
  props: IActionsProps<T>
) {
  const { inherit = true } = props;
  const { extendActionsProps, extendAuthProps } = useExtendActions();
  const baseActionsProps = {
    items: [],
    max: 10,
  };

  const newActionsProps: IActionsProps = {
    ...merge(merge(baseActionsProps, inherit ? extendActionsProps : {}), props),
  };

  const newAuthProps = {
    ...merge(
      /** 默认都是返回true，兼容有传auth属性的item项，但是没配置扩展auth方法的情况 */
      {
        auth: () => true,
      },
      inherit ? extendAuthProps : {}
    ),
  };

  return {
    actionsProps: newActionsProps,
    authProps: newAuthProps,
  };
}

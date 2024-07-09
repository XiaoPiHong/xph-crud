import { IActionsProps } from "../types";
import { merge } from "lodash-es";
import { useExtendActions } from "../hooks";
import { TXphExtendComponentPropsMap } from "../../../types";

export default function useActionsProps<T extends TXphExtendComponentPropsMap>(
  props: IActionsProps<T>
) {
  const { inherit = true } = props;
  const { extendActionsProps } = useExtendActions();
  const baseActionsProps = {
    items: [],
    max: 10,
  };

  const newActionsProps: IActionsProps = {
    ...merge(merge(baseActionsProps, inherit ? extendActionsProps : {}), props),
  };

  return {
    actionsProps: newActionsProps,
  };
}

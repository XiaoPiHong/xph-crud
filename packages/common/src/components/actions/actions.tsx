import { Fragment } from "react";
import { IActionsProps } from "./types";
import { useActionsProps, useActionItems, useRenderContent } from "./hooks";
import More from "./components/more";
import { TXphExtendComponentPropsMap } from "../../types";

const Actions = <T extends TXphExtendComponentPropsMap = {}>(
  props: IActionsProps<T>
) => {
  const { actionsProps, authProps } = useActionsProps(props);
  const { auth } = authProps;

  const { showActionItems, ellipsisActionItems } = useActionItems(
    actionsProps,
    auth
  );

  const { renderContent } = useRenderContent();

  /** 组件的布局由调用方决定 */
  return actionsProps?.render ? (
    actionsProps.render
  ) : (
    <Fragment>
      {/** 未超出部分 */}
      {showActionItems?.map((item, index) => {
        return renderContent(item, index);
      })}

      {/** 超出部分（更多操作） */}
      {ellipsisActionItems?.length ? (
        <More actionsProps={actionsProps} items={ellipsisActionItems} />
      ) : null}
    </Fragment>
  );
};

export default Actions;

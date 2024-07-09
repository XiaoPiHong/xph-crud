import { ForwardedRef, useImperativeHandle, forwardRef } from "react";
import { XphActions } from "../";
import { IDialogProps } from "./types";
import { useDialogProps, useDialogFooter, useDialogActions } from "./hooks";

const Dialog = (props: IDialogProps, ref: ForwardedRef<any>) => {
  const { dialogProps } = useDialogProps(props);
  const { footerActions } = useDialogFooter(dialogProps);
  const { renderFooter, renderTitle, title } = dialogProps;
  const { open, close } = useDialogActions(dialogProps);

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{renderTitle ? renderTitle() : title}</div>
        <div>
          <span>缩小</span>
          <span>放大</span>
          <span>关闭</span>
        </div>
      </div>
      <div>内容</div>
      {/** 如果是renderFooter，底部的布局由调用方决定  */}
      {renderFooter ? (
        renderFooter()
      ) : (
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <XphActions {...footerActions} />
        </div>
      )}
    </div>
  );
};

const ForwardedDialog = forwardRef(Dialog) as (
  props: IDialogProps & { ref?: ForwardedRef<any> }
) => ReturnType<typeof Dialog>;

export default ForwardedDialog;

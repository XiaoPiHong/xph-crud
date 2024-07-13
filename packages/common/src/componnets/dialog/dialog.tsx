import { ForwardedRef, useImperativeHandle, forwardRef } from "react";
import { XphActions, XphPortal } from "../";
import { IDialogProps, IDialogActionType } from "./types";
import { useDialogProps, useDialogFooter, useDialogActions } from "./hooks";
import style from "./dialog.module.css";

const Dialog = (props: IDialogProps, ref: ForwardedRef<IDialogActionType>) => {
  const { dialogProps } = useDialogProps(props);
  const { footerActions } = useDialogFooter(dialogProps);
  const { renderFooter, renderTitle, title, getPopperContainer } = dialogProps;
  const { open, close } = useDialogActions(dialogProps);

  const container = getPopperContainer!();

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
  console.log(container.scrollWidth, container.scrollHeight);
  return (
    <XphPortal to={container}>
      <div>
        <div className={style["xph-dialog-modal"]}></div>
        <div className={style["xph-dialog-wrapper"]}>
          <div className={style["dialog__header"]}>
            <div>{renderTitle ? renderTitle() : title}</div>
            <div>
              <span>缩小</span>
              <span>放大</span>
              <span>关闭</span>
            </div>
          </div>
          <div className={style["dialog__main"]}>内容</div>
          {/** 如果是renderFooter，底部的布局由调用方决定  */}
          {renderFooter ? (
            renderFooter()
          ) : (
            <div className={style["dialog__footer"]}>
              <XphActions {...footerActions} />
            </div>
          )}
        </div>
      </div>
    </XphPortal>
  );
};

const ForwardedDialog = forwardRef(Dialog) as (
  props: IDialogProps & { ref?: ForwardedRef<IDialogActionType> }
) => ReturnType<typeof Dialog>;

export default ForwardedDialog;

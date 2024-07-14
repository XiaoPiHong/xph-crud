import React, {
  useRef,
  ForwardedRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import { XphActions, XphPortal } from "../";
import { IDialogProps, IDialogActionType } from "./types";
import {
  useDialogProps,
  useDialogFooter,
  useDialogActions,
  useDialogInitSize,
  useDialogPosition,
} from "./hooks";
import style from "./dialog.module.css";

const Dialog = (props: IDialogProps, ref: ForwardedRef<IDialogActionType>) => {
  const [visible, setVisible] = useState(false);
  const { baseDialogProps, dialogProps } = useDialogProps(props);
  const { footerActions } = useDialogFooter(dialogProps);
  const { title, renderFooter, renderTitle, getPopperContainer } = dialogProps;
  const { open, close } = useDialogActions(dialogProps, setVisible);

  const dialogRef = useRef<HTMLDivElement>(null);
  const container = getPopperContainer!();
  const { maxWidth, maxHeight } = useDialogInitSize(
    baseDialogProps,
    dialogProps,
    container
  );
  const {} = useDialogPosition({
    container,
    dialogRef,
    dialogProps,
    visible,
    setVisible,
    maxWidth,
    maxHeight,
  });

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
  console.log(container.scrollWidth, container.scrollHeight);
  return (
    <XphPortal to={container}>
      <>
        <div
          className={style["xph-dialog-modal"]}
          style={{
            display: visible ? "block" : "none",
          }}
        ></div>
        <div
          className={style["xph-dialog-wrapper"]}
          style={{
            display: visible ? "block" : "none",
          }}
          ref={dialogRef}
        >
          <div
            className={style["dialog__header"]}
            style={{
              width: maxWidth.current,
              height: maxHeight.current,
            }}
          >
            <div>{renderTitle ? renderTitle() : title}</div>
            <div>
              <span>缩小</span>
              <span>放大</span>
              <span>关闭</span>
            </div>
          </div>
          <div className={style["dialog__main"]}>{visible ? "内容" : null}</div>
          {/** 如果是renderFooter，底部的布局由调用方决定  */}
          {renderFooter ? (
            renderFooter()
          ) : (
            <div className={style["dialog__footer"]}>
              <XphActions {...footerActions} />
            </div>
          )}
        </div>
      </>
    </XphPortal>
  );
};

const ForwardedDialog = forwardRef(Dialog) as (
  props: IDialogProps & {
    ref?: ForwardedRef<IDialogActionType>;
    children?: React.ReactNode;
  }
) => ReturnType<typeof Dialog>;

export default ForwardedDialog;

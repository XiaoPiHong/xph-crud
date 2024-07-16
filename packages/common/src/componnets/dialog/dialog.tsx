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
  useDialogSize,
  useDialogPosition,
  useDragDialog,
} from "./hooks";
import style from "./dialog.module.css";

const Dialog = (
  props: IDialogProps & { children?: React.ReactNode },
  ref: ForwardedRef<IDialogActionType>
) => {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const { baseDialogProps, dialogProps } = useDialogProps(props);
  const { footerActions } = useDialogFooter(dialogProps);
  const { title, renderFooter, renderTitle, getPopperContainer } = dialogProps;
  const { open, close } = useDialogActions(dialogProps, setVisible);

  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { dialogWidth, dialogHeight } = useDialogSize(
    baseDialogProps,
    dialogProps
  );
  const { dialogLeft, dialogTop, setDialogPosition } = useDialogPosition({
    visible,
    dialogRef,
    dialogProps,
    dialogWidth,
    dialogHeight,
  });

  const {} = useDragDialog({
    dialogHeaderRef,
    dialogRef,
    dialogProps,
    setDialogPosition,
  });

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
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
          ref={dialogRef}
          className={style["xph-dialog-wrapper"]}
          style={{
            display: visible ? "block" : "none",
            left: dialogLeft,
            top: dialogTop,
            width: dialogWidth,
            height: dialogHeight,
          }}
        >
          <div ref={dialogHeaderRef} className={style["dialog__header"]}>
            <div>{renderTitle ? renderTitle() : title}</div>
            <div>
              <span>缩小</span>
              <span>放大</span>
              <span onClick={close}>关闭</span>
            </div>
          </div>
          <div className={style["dialog__main"]}>
            {visible ? children : null}
          </div>
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

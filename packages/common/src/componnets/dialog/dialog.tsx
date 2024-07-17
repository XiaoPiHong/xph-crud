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
  dialogProps: IDialogProps & {
    _ref: ForwardedRef<IDialogActionType>;
    baseDialogProps: IDialogProps;
    children?: React.ReactNode;
  }
) => {
  console.log("render Dialog==============================================");
  const { children, baseDialogProps, _ref } = dialogProps;
  const [visible, setVisible] = useState(false);
  const { footerActions } = useDialogFooter(dialogProps);
  const { title, renderFooter, renderTitle, getPopperContainer } = dialogProps;
  const { open, close } = useDialogActions(dialogProps, setVisible);
  const container = getPopperContainer!();
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null);
  const { dialogWidth, dialogHeight } = useDialogSize(
    container,
    baseDialogProps,
    dialogProps
  );
  const { dialogLeft, dialogTop, setDialogPosition } = useDialogPosition({
    container,
    dialogWidth,
    dialogHeight,
  });
  useDragDialog({
    dialogHeaderRef,
    dialogRef,
    dialogProps,
    setDialogPosition,
  });

  useImperativeHandle(_ref, () => ({
    open,
    close,
  }));
  return (
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
        <div className={style["dialog__main"]}>{visible ? children : null}</div>
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
  );
};

/** 确保挂载的节点已经存在再生成弹窗 */
const XphDialog = (
  props: IDialogProps & { children?: React.ReactNode },
  ref: ForwardedRef<IDialogActionType>
) => {
  const { baseDialogProps, dialogProps } = useDialogProps(props);
  const { getPopperContainer } = dialogProps;
  console.log("render XphDialog==============================================");
  return (
    <XphPortal getPopperContainer={getPopperContainer!}>
      <Dialog {...dialogProps} _ref={ref} baseDialogProps={baseDialogProps} />
    </XphPortal>
  );
};

const ForwardedDialog = forwardRef(XphDialog) as (
  props: IDialogProps & {
    ref?: ForwardedRef<IDialogActionType>;
    children?: React.ReactNode;
  }
) => ReturnType<typeof XphDialog>;

export default ForwardedDialog;

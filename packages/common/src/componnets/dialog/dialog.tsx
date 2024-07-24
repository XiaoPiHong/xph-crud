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
  useDialogContentMaxHeight,
  useMinimizeDialog,
  useDialogZoom,
  useTopShowDialog,
} from "./hooks";
import MinimizeDialog from "./components/minimizeDialog";
import style from "./dialog.module.css";
import { Button } from "antd";
import {
  CloseOutlined,
  FullscreenOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";

const Dialog = forwardRef<
  IDialogActionType,
  IDialogProps & {
    baseDialogProps: IDialogProps;
    children?: React.ReactNode;
  }
>((dialogProps, ref) => {
  console.log("render Dialog==============================================");
  const { children, baseDialogProps, mask } = dialogProps;
  const [visible, setVisible] = useState(false);
  const { footerActions } = useDialogFooter(dialogProps);
  const { title, renderFooter, renderTitle, getPopperContainer } = dialogProps;
  const { open, close } = useDialogActions(dialogProps, setVisible);
  const container = getPopperContainer!() as HTMLElement;
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null);
  const dialogMainRef = useRef<HTMLDivElement>(null);
  const dialogFooterRef = useRef<HTMLDivElement>(null);
  const { dialogWidth, dialogHeight } = useDialogSize(
    container,
    baseDialogProps,
    dialogProps
  );
  const { dialogLeft, dialogTop, setDialogPosition } = useDialogPosition({
    visible,
    container,
    dialogWidth,
    dialogHeight,
  });
  const { contentMaxHeight } = useDialogContentMaxHeight({
    visible,
    container,
    dialogHeight,
    dialogRef,
    dialogHeaderRef,
    dialogFooterRef,
  });
  const {
    minimizeLeft,
    minimizeTop,
    minimizeRef,
    minimizeVisible,
    setMinimizeVisible,
    setMinimizePosition,
  } = useMinimizeDialog();

  const { onMaximize, onMinimize, onClose } = useDialogZoom({
    close,
    setMinimizeVisible,
  });

  /** 主体窗口拖拽 */
  useDragDialog({
    container,
    dialogHeaderRef,
    dialogRef,
    setDialogPosition,
  });

  /** 最小化窗口拖拽 */
  const useDragMinimizeDialog = useDragDialog;
  useDragMinimizeDialog({
    container,
    dialogHeaderRef: minimizeRef,
    dialogRef: minimizeRef,
    setDialogPosition: setMinimizePosition,
  });

  /** 弹窗层级切换 */
  useTopShowDialog({ visible, container, dialogRef, minimizeRef });

  useImperativeHandle(ref, () => ({
    open,
    close: onClose,
  }));

  return (
    <div className="xph-dialog">
      {/** 遮罩层=============================================== */}
      {/** 由于弹窗之间存在层级关系，所以遮罩层也需要层级关系，所以遮罩层没有设计成全局共用的 */}
      {mask ? (
        <div
          className={style["xph-dialog-mask"]}
          style={{
            display: visible ? "block" : "none",
            width: container.scrollWidth,
            height: container.scrollHeight,
          }}
        ></div>
      ) : null}

      {/** 弹窗最小化的窗口 */}
      <MinimizeDialog
        visible={minimizeVisible}
        ref={minimizeRef}
        left={minimizeLeft}
        top={minimizeTop}
        title={title}
        onMaximize={onMaximize}
        onClosesquare={onClose}
      />

      {/** 弹窗容器================================================ */}
      <div
        ref={dialogRef}
        className={style["xph-dialog-wrapper"]}
        style={{
          display: visible && !minimizeVisible ? "flex" : "none",
          left: dialogLeft,
          top: dialogTop,
          width: dialogWidth,
          height: dialogHeight,
        }}
      >
        {/** 弹窗头部header========================================================== */}
        <div ref={dialogHeaderRef} className={style["dialog__header"]}>
          <div>{renderTitle ? renderTitle() : title}</div>
          <div className={style["dialog__header-btns"]}>
            <Button
              type="link"
              onClick={onMinimize}
              icon={
                <ShrinkOutlined
                  style={{
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                />
              }
            />
            <Button
              type="link"
              onClick={onMaximize}
              icon={
                <FullscreenOutlined
                  style={{
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                />
              }
            />
            <Button
              type="link"
              onClick={onClose}
              icon={
                <CloseOutlined
                  style={{
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                />
              }
            />
          </div>
        </div>
        {/** 弹窗主体内容main============================================================ */}
        <div
          ref={dialogMainRef}
          className={style["dialog__main"]}
          style={{
            maxHeight: contentMaxHeight,
          }}
        >
          {visible ? children : null}
        </div>
        {/** 弹窗底部footer============================================================ */}
        {/** 如果是renderFooter，底部的布局由调用方决定  */}
        {renderFooter ? (
          <div ref={dialogFooterRef}>{renderFooter()}</div>
        ) : (
          <div ref={dialogFooterRef} className={style["dialog__footer"]}>
            <XphActions {...footerActions} />
          </div>
        )}
      </div>
    </div>
  );
});

/** 确保弹窗挂载的节点已经存在，再生成弹窗 */
const XphDialog = (
  props: IDialogProps & { children?: React.ReactNode },
  ref: ForwardedRef<IDialogActionType>
) => {
  const { baseDialogProps, dialogProps } = useDialogProps(props);
  const { getPopperContainer } = dialogProps;
  console.log("render XphDialog==============================================");
  return (
    <XphPortal getPopperContainer={getPopperContainer!}>
      <Dialog {...dialogProps} baseDialogProps={baseDialogProps} ref={ref} />
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

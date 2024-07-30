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
  useOnPropsSizeChange,
  useDialogChangeRecord,
  useResizeDialog,
} from "./hooks";
import MinimizeDialog from "./components/minimizeDialog";
import style from "./dialog.module.css";
import { Maximize, Minimize, Recovery, Close } from "./components/headerBtns";

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
  const { dialogChangeRecord, setDialogChangeRecord } = useDialogChangeRecord();
  const {
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    dialogWidth,
    dialogHeight,
    setDialogSize,
  } = useDialogSize(
    container,
    baseDialogProps,
    dialogProps,
    setDialogChangeRecord
  );
  const { dialogLeft, dialogTop, setDialogPosition } = useDialogPosition({
    container,
    setDialogChangeRecord,
  });
  const { contentMaxHeight } = useDialogContentMaxHeight({
    visible,
    container,
    dialogHeight,
    dialogRef,
    dialogHeaderRef,
    dialogFooterRef,
  });

  const { minimizeLeft, minimizeTop, minimizeRef, setMinimizePosition } =
    useMinimizeDialog();

  const {
    minimizeVisible,
    maximizeVisible,
    onMaximize,
    onMinimize,
    onRecovery,
    onClose,
  } = useDialogZoom({
    container,
    dialogChangeRecord,
    close,
    setDialogSize,
    setDialogPosition,
  });

  /** props的宽高变化，触发重新设置（兼容用户动态设置宽高的情况） */
  useOnPropsSizeChange({
    visible,
    container,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
    setDialogSize,
    setDialogPosition,
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
  const { dialogTopShowClassConfig } = useTopShowDialog({
    visible,
    container,
    dialogRef,
    minimizeRef,
  });

  /** 弹窗拉伸 */
  const {
    resizingState,
    DashedBox,
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  } = useResizeDialog({
    visible,
    container,
    dialogRef,
    setDialogSize,
    setDialogPosition,
  });

  useImperativeHandle(ref, () => ({
    open,
    close: onClose,
  }));

  return (
    <div className={dialogTopShowClassConfig["xphDialog"]}>
      {/** 遮罩层=============================================== */}
      {/** 由于弹窗之间存在层级关系，所以遮罩层也需要层级关系，所以遮罩层没有设计成全局共用的，而是每个弹窗独立的 */}
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
        onMaximize={() => onMaximize("minimize")}
        onClosesquare={onClose}
      />

      {/** 弹窗容器================================================ */}
      <div
        ref={dialogRef}
        className={`${style["xph-dialog-wrapper"]} ${dialogTopShowClassConfig["xphDialogWrapper"]}`}
        style={{
          display: visible && !minimizeVisible ? "flex" : "none",
          left: dialogLeft,
          top: dialogTop,
          width: dialogWidth,
          height: dialogHeight,
          opacity: resizingState ? 0.2 : "unset", // 拉伸时候透明度为0.2
        }}
      >
        {/** 弹窗头部header========================================================== */}
        <div ref={dialogHeaderRef} className={style["dialog__header"]}>
          <div>{renderTitle ? renderTitle() : title}</div>
          <div className={style["dialog__header-btns"]}>
            <Minimize onClick={onMinimize} />
            {maximizeVisible ? (
              <Recovery onClick={onRecovery} />
            ) : (
              <Maximize onClick={() => onMaximize("maximize")} />
            )}
            <Close onClick={onClose} />
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

        <div
          className={`${style["dialog__resize"]} ${style["dialog__resize-lt"]}`}
          onMouseDown={onMousedownResizeLt}
        ></div>
        <div
          className={`${style["dialog__resize"]} ${style["dialog__resize-rt"]}`}
          onMouseDown={onMousedownResizeRt}
        ></div>
        <div
          className={`${style["dialog__resize"]} ${style["dialog__resize-rb"]}`}
          onMouseDown={onMousedownResizeRb}
        ></div>
        <div
          className={`${style["dialog__resize"]} ${style["dialog__resize-lb"]}`}
          onMouseDown={onMousedownResizeLb}
        ></div>
      </div>

      {/** 拉伸虚拟框 */}
      <DashedBox />
    </div>
  );
});

/** 确保弹窗挂载的节点已经存在，再生成弹窗 */
const XphDialog = (
  props: IDialogProps & { children?: React.ReactNode },
  ref: ForwardedRef<IDialogActionType>
) => {
  /** 先把children取出来传递给Dialog，防止useDialogProps对children进行了处理 */
  const { children, ...rest } = props;
  const { baseDialogProps, dialogProps } = useDialogProps(rest);
  const { getPopperContainer } = dialogProps;
  console.log("render XphDialog==============================================");
  return (
    <XphPortal getPopperContainer={getPopperContainer!}>
      <Dialog {...dialogProps} baseDialogProps={baseDialogProps} ref={ref}>
        {children}
      </Dialog>
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

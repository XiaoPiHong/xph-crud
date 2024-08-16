import React, {
  useRef,
  ForwardedRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
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
  useOnContainerSizeChange,
  useOnVisableChange,
  useDialogMask,
  useMinResizeRecord,
} from "./hooks";
import MinimizeDialog from "./components/minimizeDialog";
import style from "./dialog.module.css";
import { Maximize, Minimize, Recovery, Close } from "./components/headerBtns";
import { theme } from "antd";
import { debounce } from "lodash-es";
import { useAsyncState } from "xph-crud/common";
import { Spin } from "antd";

const { useToken } = theme;

const Dialog = forwardRef<
  IDialogActionType,
  IDialogProps & {
    baseDialogProps: IDialogProps;
    children?: React.ReactNode;
  }
>((dialogProps, ref) => {
  console.log("render Dialog==============================================");
  /** 获取继承过来的样式 */
  const { token } = useToken();
  const contentStyle: React.CSSProperties = {
    borderRadius: token.borderRadiusLG,
  };
  const {
    children,
    baseDialogProps,
    mask,
    title,
    renderFooter,
    renderTitle,
    getPopperContainer,
  } = dialogProps;
  const container = getPopperContainer!() as HTMLElement;
  const [visible, setVisible] = useAsyncState(false);
  const [loading, setLoading] = useState(false);
  const { open, close } = useDialogActions(dialogProps, setVisible, setLoading);
  const { footerActions } = useDialogFooter(dialogProps, loading);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null);
  const dialogMainRef = useRef<HTMLDivElement>(null);
  const dialogFooterRef = useRef<HTMLDivElement>(null);
  const {
    parentResizeRecord,
    initLeft,
    initTop,
    initWidth,
    initHeight,
    curPropsWidth,
    curPropsHeight,
  } = useOnContainerSizeChange({
    container,
    dialogProps,
    baseDialogProps,
  });
  const { dialogChangeRecord, setDialogChangeRecord } = useDialogChangeRecord();
  const { dialogWidth, dialogHeight, setDialogSize } = useDialogSize({
    initWidth,
    initHeight,
    setDialogChangeRecord,
  });
  const { dialogLeft, dialogTop, setDialogPosition } = useDialogPosition({
    initLeft,
    initTop,
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
  const { showMask } = useDialogMask(contentMaxHeight, visible);
  const { minResizeRecord } = useMinResizeRecord(
    dialogRef,
    contentMaxHeight,
    visible
  );

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

  /** 初始化弹窗的函数（做了防抖，避免上次视图都没渲染完就又设置宽度导致的频繁闪烁） */
  const initDialog = debounce(() => {
    setDialogSize({ width: initWidth.current, height: initHeight.current });
    setDialogPosition({ left: initLeft.current, top: initTop.current });
  }, 300);

  /** 父容器尺寸变化 */
  useEffect(() => {
    initDialog();
  }, [parentResizeRecord]);

  /** 弹窗可见状态变化 */
  useOnVisableChange({
    visible,
    initWidth,
    initHeight,
    initLeft,
    initTop,
    minResizeRecord,
    dialogRef,
    setDialogSize,
    setDialogPosition,
  });

  /** props的宽高变化（目的是兼容用户动态设置宽高的情况） */
  useOnPropsSizeChange({
    initWidth,
    initHeight,
    initLeft,
    initTop,
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
    container,
    dialogRef,
    minResizeRecord,
    setDialogSize,
    setDialogPosition,
  });

  useImperativeHandle(ref, () => ({
    open,
    close: onClose,
    setLoading,
  }));
  return (
    <div className={dialogTopShowClassConfig["xphDialog"]}>
      {/** 遮罩层=============================================== */}
      {/** 由于弹窗之间存在层级关系，所以遮罩层也需要层级关系，所以遮罩层没有设计成全局共用的，而是每个弹窗独立的 */}
      {mask && showMask ? (
        <div
          className={style["xph-dialog-mask"]}
          style={{
            width: container.scrollWidth,
            height: container.scrollHeight,
          }}
        ></div>
      ) : null}

      {/** 弹窗最小化的窗口 */}
      <MinimizeDialog
        visible={minimizeVisible}
        className={`${dialogTopShowClassConfig["xphMinimizeDialog"]}`}
        loading={loading}
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
          ...contentStyle,
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
            <Close onClick={onClose} disabled={loading} />
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
          <Spin spinning={loading}>{visible ? children : null}</Spin>
        </div>
        {/** 弹窗底部footer============================================================ */}
        {/** 如果是renderFooter，底部的布局由调用方决定  */}
        {renderFooter ? (
          <div ref={dialogFooterRef}>{renderFooter({ loading })}</div>
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

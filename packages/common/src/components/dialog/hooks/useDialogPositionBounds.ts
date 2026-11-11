import { useLayoutEffect, useRef } from "react";
import type { RefObject, MutableRefObject } from "react";
import type { IContainerSizeTarget } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

/** 自动高度随内容变化后，仅将越界的窗口移回可操作范围。 */
const useDialogPositionBounds = ({
  container,
  containerSizeTarget,
  dialogRef,
  visible,
  minimized,
  containerMeasurable,
  resizing,
  setDialogPosition,
}: {
  container: HTMLElement;
  containerSizeTarget: MutableRefObject<IContainerSizeTarget>;
  dialogRef: RefObject<HTMLDivElement>;
  visible: boolean;
  minimized: boolean;
  containerMeasurable: boolean;
  resizing: boolean;
  setDialogPosition: (position: { left: number; top: number }) => void;
}) => {
  const setPositionRef = useRef(setDialogPosition);
  setPositionRef.current = setDialogPosition;

  useLayoutEffect(() => {
    if (!visible || minimized || !containerMeasurable || resizing) return;
    const dialog = dialogRef.current;
    const view = container.ownerDocument.defaultView;
    if (!dialog || !view) return;

    let frame: number | undefined;
    let disposed = false;
    const constrainPosition = () => {
      frame = undefined;
      if (disposed || !container.isConnected || !dialog.isConnected) return;

      const { width, height } = dialog.getBoundingClientRect();
      const left = parseFloat(dialog.style.left);
      const top = parseFloat(dialog.style.top);
      const { scrollWidth, scrollHeight } = containerSizeTarget.current;
      if (
        ![width, height, scrollWidth, scrollHeight].every(
          value => Number.isFinite(value) && value > 0
        ) ||
        !Number.isFinite(left) || !Number.isFinite(top)
      ) return;

      // 与拖拽使用相同中心坐标及边界；不改变尺寸或重新居中。
      const minLeft = width / 2;
      const minTop = height / 2;
      const maxLeft = Math.max(minLeft, scrollWidth - DIALOG_BOUNDARY_GAP - minLeft);
      const maxTop = Math.max(minTop, scrollHeight - DIALOG_BOUNDARY_GAP - minTop);
      const nextLeft = Math.max(minLeft, Math.min(left, maxLeft));
      const nextTop = Math.max(minTop, Math.min(top, maxTop));
      if (Math.abs(nextLeft - left) > 0.01 || Math.abs(nextTop - top) > 0.01) {
        setPositionRef.current({ left: nextLeft, top: nextTop });
      }
    };
    const scheduleConstraint = () => {
      if (disposed || frame !== undefined) return;
      // 等初始化/恢复的状态落到 DOM 后再读取中心，避免使用旧的 React 闭包。
      frame = view.requestAnimationFrame(constrainPosition);
    };
    const observer = typeof ResizeObserver === "undefined"
      ? undefined
      : new ResizeObserver(scheduleConstraint);
    observer?.observe(dialog, { box: "border-box" });
    scheduleConstraint();

    return () => {
      disposed = true;
      observer?.disconnect();
      if (frame !== undefined) view.cancelAnimationFrame(frame);
    };
  }, [container, containerSizeTarget, dialogRef, visible, minimized, containerMeasurable, resizing]);
};

export default useDialogPositionBounds;

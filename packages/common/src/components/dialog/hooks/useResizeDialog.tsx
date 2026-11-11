import { MouseEvent, useRef, useEffect, useCallback, useState } from "react";
import { IContainerSizeTarget } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

type TResizeType = "lt" | "rt" | "rb" | "lb";

interface IResizeGeometry {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface IResizeSession {
  type: TResizeType;
  start: IResizeGeometry;
  startClientX: number;
  startClientY: number;
  clientX: number;
  clientY: number;
}

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

/** 固定未拖动的一侧；空间不足时优先保持窗口在可用范围内。 */
const resizeAxis = (
  start: number,
  size: number,
  delta: number,
  moveStart: boolean,
  minimum: number,
  limit: number
) => {
  if (moveStart) {
    const end = clamp(start + size, 0, limit);
    const minSize = Math.min(minimum, end);
    const nextStart = clamp(start + delta, 0, end - minSize);
    return { start: nextStart, size: end - nextStart };
  }

  const nextStart = clamp(start, 0, limit);
  const minSize = Math.min(minimum, limit - nextStart);
  const end = clamp(start + size + delta, nextStart + minSize, limit);
  return { start: nextStart, size: end - nextStart };
};

const useResizeDialog = ({
  containerSizeTarget,
  dialogRef,
  minResizeRecord,
  setDialogSize,
  setDialogPosition,
  setMinResizeRecord,
}: {
  containerSizeTarget: React.MutableRefObject<IContainerSizeTarget>;
  dialogRef: React.RefObject<HTMLDivElement>;
  minResizeRecord: React.MutableRefObject<{
    width: number;
    height: number;
  } | null>;
  setDialogSize: (size: {
    width: number | string;
    height: number | string;
  }) => void;
  setDialogPosition: (position: { left: number; top: number }) => void;
  setMinResizeRecord: (
    record: { width: number; height: number } | null
  ) => void;
}) => {
  const dashedBoxRef = useRef<HTMLDivElement>(null);
  const resizeSession = useRef<IResizeSession | null>(null);
  const [resizingState, setResizingState] = useState(false);
  const actionsRef = useRef({ setDialogSize, setDialogPosition });
  actionsRef.current = { setDialogSize, setDialogPosition };

  /** 虚线边框包含在预览尺寸中，不能逐次把边框宽度加回窗口。 */
  const DashedBox = useCallback(() => (
    <div
      ref={dashedBoxRef}
      style={{
        position: "absolute",
        boxSizing: "border-box",
        border: "4px dashed #ccc",
        pointerEvents: "none",
        display: "none",
        zIndex: 999,
      }}
    />
  ), []);

  const cancelResize = (updateState = true) => {
    resizeSession.current = null;
    if (dashedBoxRef.current) dashedBoxRef.current.style.display = "none";
    if (updateState) setResizingState(false);
  };

  const getResizeElements = () => {
    const dialog = dialogRef.current;
    const dashedBox = dashedBoxRef.current;
    if (!dialog?.isConnected || !dashedBox?.isConnected) return null;
    const rect = dialog.getBoundingClientRect();
    // 缓存页被摘除或窗口关闭/最小化后，取消当前拉伸。
    if (rect.width <= 0 || rect.height <= 0) return null;
    return { dialog, dashedBox, rect };
  };

  const getResizeGeometry = (session: IResizeSession): IResizeGeometry | null => {
    const minimum = minResizeRecord.current;
    const maxWidth = containerSizeTarget.current.scrollWidth - DIALOG_BOUNDARY_GAP;
    const maxHeight = containerSizeTarget.current.scrollHeight - DIALOG_BOUNDARY_GAP;
    if (
      !minimum ||
      ![minimum.width, minimum.height, maxWidth, maxHeight].every(
        value => Number.isFinite(value) && value > 0
      )
    ) return null;

    const x = resizeAxis(
      session.start.left,
      session.start.width,
      session.clientX - session.startClientX,
      session.type === "lt" || session.type === "lb",
      minimum.width,
      maxWidth
    );
    const y = resizeAxis(
      session.start.top,
      session.start.height,
      session.clientY - session.startClientY,
      session.type === "lt" || session.type === "rt",
      minimum.height,
      maxHeight
    );
    if (
      ![x.start, y.start, x.size, y.size].every(Number.isFinite) ||
      x.size <= 0 || y.size <= 0
    ) return null;
    return { left: x.start, top: y.start, width: x.size, height: y.size };
  };

  const showPreview = (dashedBox: HTMLDivElement, geometry: IResizeGeometry) => {
    dashedBox.style.display = "block";
    dashedBox.style.left = `${geometry.left}px`;
    dashedBox.style.top = `${geometry.top}px`;
    dashedBox.style.width = `${geometry.width}px`;
    dashedBox.style.height = `${geometry.height}px`;
  };

  const dragstartResize = (event: MouseEvent, type: TResizeType) => {
    if (event.button !== 0) return;
    const elements = getResizeElements();
    if (!elements) {
      cancelResize();
      return;
    }
    const { dialog, dashedBox, rect } = elements;
    const centerX = parseFloat(dialog.style.left);
    const centerY = parseFloat(dialog.style.top);
    if (!Number.isFinite(centerX) || !Number.isFinite(centerY)) {
      cancelResize();
      return;
    }
    if (!minResizeRecord.current) {
      setMinResizeRecord({ width: rect.width, height: rect.height });
    }

    const session: IResizeSession = {
      type,
      start: {
        left: centerX - rect.width / 2,
        top: centerY - rect.height / 2,
        width: rect.width,
        height: rect.height,
      },
      startClientX: event.clientX,
      startClientY: event.clientY,
      clientX: event.clientX,
      clientY: event.clientY,
    };
    const geometry = getResizeGeometry(session);
    if (!geometry) {
      cancelResize();
      return;
    }
    event.preventDefault();
    resizeSession.current = session;
    setResizingState(true);
    showPreview(dashedBox, geometry);
  };

  const dragoverResize = (event: { clientX: number; clientY: number; buttons: number }) => {
    const session = resizeSession.current;
    if (!session) return;
    if (event.buttons === 0) {
      cancelResize();
      return;
    }
    const elements = getResizeElements();
    if (!elements) {
      cancelResize();
      return;
    }
    session.clientX = event.clientX;
    session.clientY = event.clientY;
    // 始终从起点加总位移，不读取已经取整或带边框的预览盒子尺寸。
    const geometry = getResizeGeometry(session);
    if (!geometry) {
      cancelResize();
      return;
    }
    showPreview(elements.dashedBox, geometry);
  };

  const dragendResize = () => {
    const session = resizeSession.current;
    if (!session) return;
    const geometry = getResizeElements() ? getResizeGeometry(session) : null;
    cancelResize();
    if (!geometry) return;
    actionsRef.current.setDialogPosition({
      left: geometry.left + geometry.width / 2,
      top: geometry.top + geometry.height / 2,
    });
    actionsRef.current.setDialogSize({ width: geometry.width, height: geometry.height });
  };

  const onMousedownResizeLt = (event: MouseEvent) => dragstartResize(event, "lt");
  const onMousedownResizeRt = (event: MouseEvent) => dragstartResize(event, "rt");
  const onMousedownResizeRb = (event: MouseEvent) => dragstartResize(event, "rb");
  const onMousedownResizeLb = (event: MouseEvent) => dragstartResize(event, "lb");

  const onBodyMouseMove = useCallback((event: globalThis.MouseEvent) => {
    dragoverResize(event);
  }, []);
  const onBodyMouseUp = useCallback(() => dragendResize(), []);
  const onBodyMouseLeave = useCallback(() => dragendResize(), []);
  const onWindowBlur = useCallback(() => cancelResize(), []);

  useEffect(() => {
    document.body.addEventListener("mousemove", onBodyMouseMove);
    document.body.addEventListener("mouseup", onBodyMouseUp);
    document.body.addEventListener("mouseleave", onBodyMouseLeave);
    window.addEventListener("blur", onWindowBlur);
    return () => {
      document.body.removeEventListener("mousemove", onBodyMouseMove);
      document.body.removeEventListener("mouseup", onBodyMouseUp);
      document.body.removeEventListener("mouseleave", onBodyMouseLeave);
      window.removeEventListener("blur", onWindowBlur);
      cancelResize(false);
    };
  }, []);

  return {
    resizingState,
    DashedBox,
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  };
};

export default useResizeDialog;

import { useEffect, useCallback, useRef } from "react";
import { IContainerSizeTarget } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

const useDragDialog = ({
  containerSizeTarget,
  dialogHeaderRef,
  dialogRef,
  setDialogPosition,
}: {
  containerSizeTarget: React.MutableRefObject<IContainerSizeTarget>;
  dialogHeaderRef: React.RefObject<HTMLDivElement>;
  dialogRef: React.RefObject<HTMLDivElement>;
  setDialogPosition: (position: { left: number; top: number }) => void;
}) => {
  const spaceX = useRef(0);
  const spaceY = useRef(0);
  const setPositionRef = useRef(setDialogPosition);
  setPositionRef.current = setDialogPosition;

  const getElementTranslateDistance = (element) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width <= 0 || height <= 0) return null;

    const translateX = -0.5 * width;
    const translateY = -0.5 * height;

    return { translateX, translateY };
  };

  const onHeaderDivMouseDown = useCallback((e: MouseEvent) => {
    if (e.button !== 0) return;
    const dialog = dialogRef.current;
    if (!dialog?.isConnected) return;
    const left = parseFloat(dialog.style.left);
    const top = parseFloat(dialog.style.top);
    if (!Number.isFinite(left) || !Number.isFinite(top)) return;
    spaceX.current = e.clientX - left;
    spaceY.current = e.clientY - top;
    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mouseup", onDocumentMouseUp);
    window.addEventListener("blur", onDocumentMouseUp);
  }, []);

  const onDocumentMouseMove = useCallback((e: MouseEvent) => {
    const dialogDiv = dialogRef.current;
    // 缓存页切走或窗口卸载后，不再处理本次拖拽。
    if (!dialogDiv?.isConnected || e.buttons === 0) {
      onDocumentMouseUp();
      return;
    }
    const translation = getElementTranslateDistance(dialogDiv);
    if (!translation) {
      onDocumentMouseUp();
      return;
    }
    const { translateX, translateY } = translation;
    let x = e.clientX - spaceX.current;
    let y = e.clientY - spaceY.current;

    // client/scroll 尺寸会取整，保留 1 CSS 像素吸收容器边框及尺寸的小数。
    // 半宽和半高统一使用实际矩形，避免混用 offset 尺寸后在右下方越界。
    const minX = -translateX;
    const minY = -translateY;
    const maxX = Math.max(
      minX,
      containerSizeTarget.current.scrollWidth + translateX - DIALOG_BOUNDARY_GAP
    );
    const maxY = Math.max(
      minY,
      containerSizeTarget.current.scrollHeight + translateY - DIALOG_BOUNDARY_GAP
    );

    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));

    // 设置新的位置
    setPositionRef.current({ left: x, top: y });
  }, []);

  const onDocumentMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", onDocumentMouseMove);
    document.removeEventListener("mouseup", onDocumentMouseUp);
    window.removeEventListener("blur", onDocumentMouseUp);
  }, []);

  useEffect(() => {
    const headerDiv = dialogHeaderRef.current;
    if (!headerDiv) return;
    headerDiv.addEventListener("mousedown", onHeaderDivMouseDown);

    return () => {
      headerDiv.removeEventListener("mousedown", onHeaderDivMouseDown);
      // 卸载不一定发生在 mouseup 之后，也必须释放 document 级监听。
      onDocumentMouseUp();
    };
  }, []);
  return {};
};
export default useDragDialog;

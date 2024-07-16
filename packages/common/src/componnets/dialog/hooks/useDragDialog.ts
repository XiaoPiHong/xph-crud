import { useEffect, useCallback, useRef } from "react";
import { IDialogProps } from "../types";

const useDragDialog = ({
  dialogHeaderRef,
  dialogRef,
  dialogProps,
  setDialogPosition,
}: {
  dialogHeaderRef: React.RefObject<HTMLDivElement>;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogProps: IDialogProps;
  setDialogPosition: (position: { left: number; top: number }) => void;
}) => {
  const { getPopperContainer } = dialogProps;
  const spaceX = useRef(0);
  const spaceY = useRef(0);

  const getElementTranslateDistance = (element) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const translateX = -0.5 * width;
    const translateY = 0.5 * height;

    return { translateX, translateY };
  };

  const onHeaderDivMouseDown = useCallback((e: MouseEvent) => {
    const { offsetLeft, offsetTop } = dialogRef.current!;
    spaceX.current = e.clientX - offsetLeft;
    /** 这里有个需要注意的点要是设置transform: translate(-50%, -50%);,offsetLeft和offsetTop是不回包含transform移动的距离的，但是margin的距离是包含的 */
    spaceY.current = e.clientY - offsetTop;
    console.log(e.clientX, e.clientY);
    console.log(offsetLeft, offsetTop);
    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mouseup", onDocumentMouseUp);
  }, []);

  const onDocumentMouseMove = useCallback((e: MouseEvent) => {
    const dialogDiv = dialogRef.current!;
    const container = getPopperContainer!();

    const { translateX, translateY } = getElementTranslateDistance(dialogDiv);

    let x = e.clientX - spaceX.current;
    let y = e.clientY - spaceY.current;

    // 边界检查
    const minX = 0;
    const minY = 0;
    const maxX = container.clientWidth - dialogDiv.offsetWidth;
    const maxY = container.clientHeight - dialogDiv.offsetHeight;

    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    if (y < minY) y = minY;
    if (y > maxY) y = maxY;

    // 设置新的位置
    setDialogPosition({ left: x, top: y });
  }, []);

  const onDocumentMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", onDocumentMouseMove);
    document.removeEventListener("mouseup", onDocumentMouseUp);
  }, []);

  useEffect(() => {
    const headerDiv = dialogHeaderRef.current!;
    headerDiv.addEventListener("mousedown", onHeaderDivMouseDown);

    return () => {
      headerDiv.removeEventListener("mousedown", onHeaderDivMouseDown);
    };
  }, []);
  return {};
};
export default useDragDialog;

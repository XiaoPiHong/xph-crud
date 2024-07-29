import { MouseEvent, useRef, useEffect, useCallback } from "react";
import { IDialogChangeRecord } from ".";

type TResizeType = "lt" | "rt" | "rb" | "lb";

const useResizeDialog = ({
  container,
  dialogRef,
  dialogLeft,
  dialogTop,
  dialogWidth,
  dialogHeight,
  dialogChangeRecord,
  setDialogSize,
  setDialogPosition,
}: {
  container: HTMLElement;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogLeft: number;
  dialogTop: number;
  dialogWidth: number | string;
  dialogHeight: number | string;
  dialogChangeRecord: React.MutableRefObject<IDialogChangeRecord>;
  setDialogSize: (size: {
    width: number | string;
    height: number | string;
  }) => void;
  setDialogPosition: (position: { left: number; top: number }) => void;
}) => {
  const DashedBox = useCallback(() => {
    return (
      <div
        ref={dashedBoxRef}
        style={{
          position: "absolute",
          border: "4px dashed #ccc",
          display: "none",
        }}
      ></div>
    );
  }, []);
  const dashedBoxRef = useRef<HTMLDivElement>(null);
  const firstResizeRecord = useRef<null | {
    left: number;
    top: number;
    width: number;
    height: number;
  }>(null);
  const resizeType = useRef<TResizeType>();
  const resizing = useRef(false);
  const preClientX = useRef(0);
  const preClientY = useRef(0);

  const dragstartResize = (event: MouseEvent, type: TResizeType) => {
    resizing.current = true;
    resizeType.current = type;
    /** 记录开始移动的坐标 */
    const { clientX, clientY } = event;
    preClientX.current = clientX;
    preClientY.current = clientY;

    const left = parseFloat(dialogRef.current!.style.left);
    const top = parseFloat(dialogRef.current!.style.top);
    const width = dialogRef.current!.offsetWidth;
    const height = dialogRef.current!.offsetHeight;

    dashedBoxRef.current!.style.display = "block";
    dashedBoxRef.current!.style.left = `${left - 0.5 * width}px`;
    dashedBoxRef.current!.style.top = `${top - 0.5 * height}px`;
    dashedBoxRef.current!.style.width = `${width}px`;
    dashedBoxRef.current!.style.height = `${height}px`;

    /** 记录首次拉伸时候的大小和位置，以后的拉伸最小边界以这个为准 */
    if (firstResizeRecord.current === null) {
      firstResizeRecord.current = {
        left,
        top,
        width,
        height,
      };
    }
  };

  const dragoverResize = (event: MouseEvent<HTMLBodyElement, MouseEvent>) => {
    if (resizing.current) {
      const { clientX, clientY } = event;
      /** 鼠标位移的距离 */
      const dragoverX = clientX - preClientX.current;
      const dragoverY = clientY - preClientY.current;

      /** 获取元素的初始样式（注意这种只有内联样式才能获取到style.left和style.top） */
      const left = parseFloat(dashedBoxRef.current!.style.left);
      const top = parseFloat(dashedBoxRef.current!.style.top);
      const width = dashedBoxRef.current!.offsetWidth;
      const height = dashedBoxRef.current!.offsetHeight;

      /** 限制最小和最大尺寸 */
      const minWidth = firstResizeRecord.current!.width;
      const minHeight = firstResizeRecord.current!.height;
      const maxWidth = container.scrollWidth;
      const maxHeight = container.scrollHeight;
      const minLeft = firstResizeRecord.current!.width * 0.5;
      const minTop = firstResizeRecord.current!.height * 0.5;
      const maxLeft = maxWidth - minWidth + minWidth * 0.5;
      const maxTop = maxHeight - minHeight + minHeight * 0.5;

      let newWidth = width;
      let newHeight = height;
      let newLeft = left;
      let newTop = top;

      switch (resizeType.current) {
        case "lt": {
          newWidth = newWidth - dragoverX;
          newHeight = newHeight - dragoverY;
          newTop = newTop + dragoverY;
          newLeft = newLeft + dragoverX;
          /** 限制最小尺寸 */
          if (newWidth < minWidth) {
            newWidth = width;
            newLeft = left;
          }
          if (newHeight < minHeight) {
            newHeight = height;
            newTop = top;
          }
          /** 限制最大尺寸 */
          if (newLeft < 0) {
            newLeft = 0;
            newWidth = width;
          }
          if (newTop < 0) {
            newTop = 0;
            newHeight = height;
          }
          break;
        }
        case "rt": {
          break;
        }
        case "rb": {
          break;
        }
        case "lb": {
          break;
        }
      }
      dashedBoxRef.current!.style.left = `${newLeft}px`;
      dashedBoxRef.current!.style.top = `${newTop}px`;
      dashedBoxRef.current!.style.width = `${newWidth}px`;
      dashedBoxRef.current!.style.height = `${newHeight}px`;

      preClientX.current = clientX;
      preClientY.current = clientY;
    }
  };

  const dragendResize = () => {
    resizing.current = false;
    dashedBoxRef.current!.style.display = "none";
  };

  /**
   * 监听 mousedown 调整左上角
   */
  const onMousedownResizeLt = (event: MouseEvent) =>
    dragstartResize(event, "lt");

  /**
   * 监听 mousedown 调整右上角
   */
  const onMousedownResizeRt = (event: MouseEvent) =>
    dragstartResize(event, "rt");

  /**
   * 监听 mousedown 调整右下角
   */
  const onMousedownResizeRb = (event: MouseEvent) =>
    dragstartResize(event, "rb");

  /**
   * 监听 mousedown 调整左下角
   */
  const onMousedownResizeLb = (event: MouseEvent) =>
    dragstartResize(event, "lb");

  /** 监听body的鼠标移动 */
  const onBodyMouseMove = useCallback((event) => {
    dragoverResize(event);
  }, []);

  /** 监听body的鼠标抬起 */
  const onBodyMouseUp = useCallback(() => {
    dragendResize();
  }, []);

  /** 监听body的鼠标离开 */
  const onBodyMouseLeave = useCallback(() => {
    dragendResize();
  }, []);

  useEffect(() => {
    document.body.addEventListener("mousemove", onBodyMouseMove);
    document.body.addEventListener("mouseup", onBodyMouseUp);
    document.body.addEventListener("mouseleave", onBodyMouseLeave);

    return () => {
      document.body.removeEventListener("mousemove", onBodyMouseMove);
      document.body.removeEventListener("mouseup", onBodyMouseUp);
      document.body.removeEventListener("mouseleave", onBodyMouseLeave);
    };
  }, []);

  return {
    DashedBox,
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  };
};

export default useResizeDialog;

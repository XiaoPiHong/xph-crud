import { MouseEvent, useRef, useEffect, useCallback } from "react";
import { IDialogChangeRecord } from "../hooks";

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
  };

  const dragoverResize = (event: MouseEvent<HTMLBodyElement, MouseEvent>) => {
    if (resizing.current) {
      const { clientX, clientY } = event;
      /** 鼠标位移的距离 */
      const dragoverX = clientX - preClientX.current;
      const dragoverY = clientY - preClientY.current;

      /** 获取元素的初始样式（注意这种只有内联样式才能获取到style.left和style.top） */
      const left = parseFloat(dialogRef.current!.style.left);
      const top = parseFloat(dialogRef.current!.style.top);
      const width = dialogRef.current!.offsetWidth;
      const height = dialogRef.current!.offsetHeight;

      /** 限制最小和最大尺寸 */
      const minWidth = 100;
      const minHeight = 100;
      const maxWidth = container.scrollWidth;
      const maxHeight = container.scrollHeight;

      let newWidth = width;
      let newHeight = height;
      let newLeft = left;
      let newTop = top;

      switch (resizeType.current) {
        case "lt": {
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

      preClientX.current = clientX;
      preClientY.current = clientY;
    }
  };

  const dragendResize = () => {
    resizing.current = false;
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
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  };
};

export default useResizeDialog;

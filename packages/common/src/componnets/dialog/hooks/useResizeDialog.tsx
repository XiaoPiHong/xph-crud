import { MouseEvent, useRef, useEffect, useCallback, useState } from "react";

type TResizeType = "lt" | "rt" | "rb" | "lb";

const useResizeDialog = ({
  visible,
  container,
  dialogRef,
  setDialogSize,
  setDialogPosition,
}: {
  visible: boolean; // 传递visible进来的时候是为了每次打开的时候都以当前打开的宽高为最小大小来限制
  container: HTMLElement;
  dialogRef: React.RefObject<HTMLDivElement>;
  setDialogSize: (size: {
    width: number | string;
    height: number | string;
  }) => void;
  setDialogPosition: (position: { left: number; top: number }) => void;
}) => {
  /** 虚拟块组件 */
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

  /** 拉伸的最小尺寸 */
  const minResizeRecord = useRef<null | {
    width: number;
    height: number;
  }>(null);

  useEffect(() => {
    /** 打开弹窗记录当前尺寸 */
    if (visible) {
      const width = dialogRef.current!.offsetWidth;
      const height = dialogRef.current!.offsetHeight;
      minResizeRecord.current = {
        width,
        height,
      };
    } else {
      /** 关闭弹窗置空尺寸的记录 */
      minResizeRecord.current = null;
    }
  }, [visible]);

  const dashedBoxRef = useRef<HTMLDivElement>(null);
  const resizeType = useRef<TResizeType>();
  const resizing = useRef(false);
  const [resizingState, setResizingState] = useState(false);
  const preClientX = useRef(0);
  const preClientY = useRef(0);

  const dragstartResize = (event: MouseEvent, type: TResizeType) => {
    resizing.current = true;
    setResizingState(true);
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

      /** 最小尺寸和最大尺寸 */
      const minWidth = minResizeRecord.current!.width;
      const minHeight = minResizeRecord.current!.height;
      const maxWidth = container.scrollWidth;
      const maxHeight = container.scrollHeight;
      // const minLeft = minResizeRecord.current!.width * 0.5;
      // const minTop = minResizeRecord.current!.height * 0.5;
      // const maxLeft = maxWidth - minWidth + minWidth * 0.5;
      // const maxTop = maxHeight - minHeight + minHeight * 0.5;

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
          newWidth = newWidth + dragoverX;
          newHeight = newHeight - dragoverY;
          newTop = newTop + dragoverY;
          newLeft = left;

          /** 限制最小尺寸 */
          if (newWidth < minWidth) {
            newWidth = width;
          }
          if (newHeight < minHeight) {
            newHeight = height;
            newTop = top;
          }
          /** 限制最大尺寸 */
          if (newWidth > maxWidth - newLeft) {
            newWidth = maxWidth - newLeft;
          }
          if (newTop < 0) {
            newTop = 0;
            newHeight = height;
          }
          break;
        }
        case "rb": {
          newWidth = newWidth + dragoverX;
          newHeight = newHeight + dragoverY;
          newTop = top;
          newLeft = left;
          /** 限制最小尺寸 */
          if (newWidth < minWidth) {
            newWidth = width;
          }
          if (newHeight < minHeight) {
            newHeight = height;
          }
          /** 限制最大尺寸 */
          if (newWidth > maxWidth - newLeft) {
            newWidth = maxWidth - newLeft;
          }
          if (newHeight > maxHeight - newTop) {
            newHeight = maxHeight - newTop;
          }
          break;
        }
        case "lb": {
          newWidth = newWidth - dragoverX;
          newHeight = newHeight + dragoverY;
          newTop = top;
          newLeft = newLeft + dragoverX;
          /** 限制最小尺寸 */
          if (newWidth < minWidth) {
            newWidth = width;
            newLeft = left;
          }
          if (newHeight < minHeight) {
            newHeight = height;
          }
          /** 限制最大尺寸 */
          if (newLeft < 0) {
            newLeft = 0;
            newWidth = width;
          }
          if (newHeight > maxHeight - newTop) {
            newHeight = maxHeight - newTop;
          }
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
    if (resizing.current) {
      resizing.current = false;

      setResizingState(false);
      dashedBoxRef.current!.style.display = "none";

      const { left, top, width, height } = dashedBoxRef.current!.style;
      /** 因为虚拟块的位置一开始是以container为基点的（left和top都是相对于container的真实位置）， 而弹窗是left和top在基于基于container的基础上再偏移了自身的一半（也就是多减了自身的一半），所以虚拟块的left和top转换到弹窗上时需要再加上自身的一半 */
      const newLeft = parseFloat(left) + 0.5 * parseFloat(width);
      const newTop = parseFloat(top) + 0.5 * parseFloat(height);
      const newWidth = parseFloat(width);
      const newHeight = parseFloat(height);
      console.log(newLeft, newTop, newWidth, newHeight);
      setDialogPosition({ left: newLeft, top: newTop });
      setDialogSize({ width: newWidth, height: newHeight });
    }
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
    resizingState,
    DashedBox,
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  };
};

export default useResizeDialog;

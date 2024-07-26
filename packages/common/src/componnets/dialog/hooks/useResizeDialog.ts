import { MouseEvent, useRef } from "react";

type TResizeType = "lt" | "rt" | "rb" | "lb";

const useResizeDialog = ({
  container,
  dialogLeft,
  dialogTop,
  dialogWidth,
  dialogHeight,
}: {
  container: HTMLElement;
  dialogLeft: number;
  dialogTop: number;
  dialogWidth: number | string;
  dialogHeight: number | string;
}) => {
  const resizeType = useRef<TResizeType>();
  const resizing = useRef(false);

  const dragstartResize = (event: MouseEvent, type: TResizeType) => {
    resizing.current = true;
    resizeType.current = type;
  };

  const dragoverResize = (event: MouseEvent) => {
    if (resizing.current) {
      switch (resizeType.current) {
        case "lt":
          break;
        case "rt":
          break;
        case "rb":
          break;
        case "lb":
          break;
      }
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

  return {
    onMousedownResizeLt,
    onMousedownResizeRt,
    onMousedownResizeRb,
    onMousedownResizeLb,
  };
};

export default useResizeDialog;

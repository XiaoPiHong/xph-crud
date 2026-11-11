import { IContainerSizeTarget } from ".";
import { DIALOG_BOUNDARY_GAP } from "./dialogBounds";

/** 只约束窗口范围；正文由 flex 布局收缩，避免隐藏/恢复时读取零尺寸。 */
const useDialogContentMaxHeight = ({
  containerSizeTarget,
  dialogHeight,
}: {
  containerSizeTarget: React.MutableRefObject<IContainerSizeTarget>;
  dialogHeight: number | string;
}) => {
  const { clientHeight, scrollHeight } = containerSizeTarget.current;
  // 无遮罩窗口最大化/拉伸后允许占用容器的滚动区域。
  const maxHeight =
    typeof dialogHeight === "number" && dialogHeight > clientHeight
      ? scrollHeight
      : clientHeight;
  return {
    dialogMaxHeight:
      maxHeight > DIALOG_BOUNDARY_GAP
        ? maxHeight - DIALOG_BOUNDARY_GAP
        : ("unset" as const),
    contentMaxHeight: "unset" as const,
  };
};

export default useDialogContentMaxHeight;

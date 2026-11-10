import { useState, useEffect, useCallback } from "react";
import { IContainerSizeTarget } from ".";

const useDialogContentMaxHeight = ({
  visible,
  containerSizeTarget,
  dialogHeight,
  dialogRef,
  dialogHeaderRef,
  dialogFooterRef,
}: {
  visible: boolean;
  containerSizeTarget: React.MutableRefObject<IContainerSizeTarget>;
  dialogHeight: number | string;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogHeaderRef: React.RefObject<HTMLDivElement>;
  dialogFooterRef: React.RefObject<HTMLDivElement>;
}) => {
  const { clientHeight, scrollHeight } = containerSizeTarget.current;
  // 无遮罩窗口最大化/拉伸后可占用滚动区域，恢复时沿用同一高度范围。
  const containerMaxHeight =
    typeof dialogHeight === "number" && dialogHeight > clientHeight
      ? scrollHeight
      : clientHeight;
  const [dialogMaxHeight, setDialogMaxHeight] = useState<number | "unset">(0);
  const [contentMaxHeight, setContentMaxHeight] = useState<number | "unset">(
    "unset"
  );

  /** 计算弹窗内容的最大高度 */
  const getMainMaxHeight = useCallback(
    (dialogHeight: number, containerHeight: number) => {
      /** 目前弹窗没有设置边框，所以先为0 */
      const borderTopWidth = 0;
      const borderBottomWidth = 0;
      const headerHeight = dialogHeaderRef.current?.offsetHeight;
      const footerHeight = dialogFooterRef.current?.offsetHeight;
      let mainMaxHeight =
        dialogHeight -
        headerHeight! -
        footerHeight! -
        (borderTopWidth + borderBottomWidth);
      /** 临界检查 */
      const containerMainMaxHeight =
        containerHeight -
        headerHeight! -
        footerHeight! -
        (borderTopWidth + borderBottomWidth);
      if (mainMaxHeight > containerMainMaxHeight) {
        mainMaxHeight = containerMainMaxHeight;
      }
      return mainMaxHeight;
    },
    [dialogHeaderRef, dialogFooterRef]
  );

  /** 根据限制高度后的窗口尺寸，计算内容区的可滚动高度。 */
  useEffect(() => {
    if (!visible) return;
    if (dialogMaxHeight === containerMaxHeight) {
      console.log("触发了dialogMaxHeight改变");
      const curDialogHeight = dialogRef.current?.getBoundingClientRect().height;
      setContentMaxHeight(getMainMaxHeight(curDialogHeight!, containerMaxHeight));
      setDialogMaxHeight("unset");
    }
  }, [visible, dialogMaxHeight, containerMaxHeight, dialogRef, getMainMaxHeight]);

  useEffect(() => {
    if (!visible) return;
    if (dialogHeight !== "unset" && dialogHeight !== 0) {
      console.log("触发了重新设置contentMaxHeight", dialogHeight);
      setContentMaxHeight(
        getMainMaxHeight(dialogHeight as number, containerMaxHeight)
      );
      setDialogMaxHeight("unset");
    }
  }, [visible, dialogHeight, containerMaxHeight, getMainMaxHeight]);

  /** 主窗口显示或容器高度变化时重新测量，关闭或最小化时重置。 */
  useEffect(() => {
    if (visible) {
      setDialogMaxHeight(containerMaxHeight);
    } else {
      setDialogMaxHeight(0);
      setContentMaxHeight("unset");
    }
  }, [visible, containerMaxHeight]);

  return {
    dialogMaxHeight,
    contentMaxHeight,
  };
};

export default useDialogContentMaxHeight;

import { useState, useEffect } from "react";
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
  const [dialogMaxHeight, setDialogMaxHeight] = useState<number | "unset">(0);
  const [contentMaxHeight, setContentMaxHeight] = useState<number | "unset">(
    "unset"
  );

  /** 计算弹窗内容的最大高度 */
  const getMainMaxHeight = (dialogHeight: number, containerHeight: number) => {
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
  };

  /** 这里只会触发一次 */
  useEffect(() => {
    if (dialogMaxHeight === clientHeight) {
      console.log("触发了dialogMaxHeight改变");
      const curDialogHeight = dialogRef.current?.getBoundingClientRect().height;
      setContentMaxHeight(getMainMaxHeight(curDialogHeight!, clientHeight));
      setDialogMaxHeight("unset");
    }
  }, [dialogMaxHeight]);

  useEffect(() => {
    if (dialogHeight !== "unset" && dialogHeight !== 0) {
      console.log("触发了重新设置contentMaxHeight", dialogHeight);
      setContentMaxHeight(
        getMainMaxHeight(
          dialogHeight as number,
          (dialogHeight as number) > clientHeight ? scrollHeight : clientHeight
        )
      );
      setDialogMaxHeight("unset");
    }
  }, [dialogHeight]);

  /** 关闭弹窗的时候重置所有属性 */
  useEffect(() => {
    if (visible) {
      setDialogMaxHeight(clientHeight);
    } else {
      setDialogMaxHeight(0);
      setContentMaxHeight("unset");
    }
  }, [visible]);

  return {
    dialogMaxHeight,
    contentMaxHeight,
  };
};

export default useDialogContentMaxHeight;

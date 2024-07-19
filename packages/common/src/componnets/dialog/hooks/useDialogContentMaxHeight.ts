import { useState, useEffect } from "react";

const useDialogContentMaxHeight = ({
  visible,
  container,
  dialogHeight,
  dialogRef,
  dialogHeaderRef,
  dialogFooterRef,
}: {
  visible: boolean;
  container: HTMLElement;
  dialogHeight: number | string;
  dialogRef: React.RefObject<HTMLDivElement>;
  dialogHeaderRef: React.RefObject<HTMLDivElement>;
  dialogFooterRef: React.RefObject<HTMLDivElement>;
}) => {
  const [contentMaxHeight, setContentMaxHeight] = useState<string | number>(
    "unset"
  );

  useEffect(() => {
    if (visible) {
      // 目前弹窗没有设置边框，所以先为0
      const borderTopWidth = 0;
      const borderBottomWidth = 0;

      // 每次打开弹窗的时候，都根据弹窗的高度设置最大高度
      const { clientHeight } = container;
      const headerHeight = dialogHeaderRef.current?.offsetHeight;
      const footerHeight = dialogFooterRef.current?.offsetHeight;
      // 盒子为content-box时，getBoundingClientRect获取到的height为border+padding+height
      const curDialogHeight = dialogRef.current?.getBoundingClientRect().height;
      let mainMaxHeight =
        curDialogHeight! -
        headerHeight! -
        footerHeight! -
        (borderTopWidth + borderBottomWidth);
      console.log(mainMaxHeight, "mainMaxHeight");
      // 临界检查
      const containerMainMaxHeight =
        clientHeight -
        headerHeight! -
        footerHeight! -
        (borderTopWidth + borderBottomWidth);
      console.log(containerMainMaxHeight, "containerMainMaxHeight");
      if (mainMaxHeight > containerMainMaxHeight) {
        mainMaxHeight = containerMainMaxHeight;
      }

      setContentMaxHeight(mainMaxHeight);
    }
  }, [visible, dialogHeight]);

  return {
    contentMaxHeight,
    setContentMaxHeight,
  };
};

export default useDialogContentMaxHeight;

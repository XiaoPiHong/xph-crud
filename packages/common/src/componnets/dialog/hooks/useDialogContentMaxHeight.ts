import { useState, useEffect } from "react";

const useDialogContentMaxHeight = ({
  visible,
  dialogHeight,
  dialogRef,
  dialogHeaderRef,
  dialogFooterRef,
}: {
  visible: boolean;
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
      const headerHeight = dialogHeaderRef.current?.offsetHeight;
      const footerHeight = dialogFooterRef.current?.offsetHeight;
      // 盒子为content-box时，getBoundingClientRect获取到的height为border+padding+height
      const dialogHeight = dialogRef.current?.getBoundingClientRect().height;
      const mainMaxHeight = dialogHeight! - headerHeight! - footerHeight!;
      setContentMaxHeight(mainMaxHeight);
    }
  }, [visible, dialogHeight]);

  return {
    contentMaxHeight,
    setContentMaxHeight,
  };
};

export default useDialogContentMaxHeight;

import React, { useRef } from "react";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const dialogProps: IXphDialogProps = {
    title: "弹窗标题",
  };
  const dialogRef = useRef<IXphDialogActionType>(null);

  const onOpen = () => {
    dialogRef.current?.open();
  };
  return (
    <>
      <button onClick={onOpen}>点击打开XphDialog弹窗</button>
      <XphDialog {...dialogProps} ref={dialogRef} />
    </>
  );
};

export default ReactApp;

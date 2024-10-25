import React, { useRef } from "react";
import { Button } from "antd";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const dialogRef = useRef<IXphDialogActionType>(null);
  const dialogProps: IXphDialogProps = {
    title: "弹窗标题",
    mask: true,
  };

  const onClickOpenDialogBtn = () => {
    dialogRef.current?.open();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={onClickOpenDialogBtn}>打开弹窗</Button>
      </div>
      <XphDialog {...dialogProps} ref={dialogRef}>
        我是弹窗内容
      </XphDialog>
    </div>
  );
};

export default ReactApp;

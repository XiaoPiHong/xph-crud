import React, { useRef } from "react";
import { Button } from "antd";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const dialogRef = useRef<IXphDialogActionType>(null);
  const dialogProps: IXphDialogProps = {
    title: "弹窗标题",
    getPopperContainer: () =>
      document.getElementById("docs-comp-dialog-properties-ref"),
  };
  return (
    <div
      id="docs-comp-dialog-properties-ref"
      style={{
        width: "100%",
        height: "500px",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={() => dialogRef.current?.open()}>打开弹窗</Button>
        <Button onClick={() => dialogRef.current?.close()}>关闭弹窗</Button>
        <Button onClick={() => dialogRef.current?.setLoading(true)}>
          加载中
        </Button>
        <Button onClick={() => dialogRef.current?.setLoading(false)}>
          加载完成
        </Button>
      </div>
      <XphDialog {...dialogProps} ref={dialogRef}>
        我是弹窗内容
      </XphDialog>
    </div>
  );
};

export default ReactApp;

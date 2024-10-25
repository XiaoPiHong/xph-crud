import React, { useRef } from "react";
import { Button, Tooltip } from "antd";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const dialogRef = useRef<IXphDialogActionType>(null);
  const dialogProps: IXphDialogProps = {
    title: "弹窗标题",
    height: 400,
    getPopperContainer: () =>
      document.getElementById("docs-comp-dialog-properties-renderFooter"),
    renderFooter: ({ loading }) => {
      return (
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <Tooltip
            overlay={
              <>
                合同内容：
                <br />
                1. 合同内容1
                <br />
                2. 合同内容2
                <br />
                3. 合同内容3
              </>
            }
          >
            <span style={{ color: "red" }}>注意！！！</span>
          </Tooltip>
          <Button type="primary" disabled={loading} onClick={onClickAuditBtn}>
            审核
          </Button>
        </div>
      );
    },
  };

  const onClickOpenDialogBtn = () => {
    dialogRef.current?.open();
  };

  const onClickAuditBtn = () => {
    dialogRef.current?.setLoading(true);
    setTimeout(() => {
      dialogRef.current?.setLoading(false);
      dialogRef.current?.close();
    }, 3000);
  };

  return (
    <div
      id="docs-comp-dialog-properties-renderFooter"
      style={{
        width: "100%",
        height: "500px",
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

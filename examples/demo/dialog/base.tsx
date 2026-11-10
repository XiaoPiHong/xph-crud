import React, { useRef, useState } from "react";
import { Input, Button } from "antd";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const firstDialogRef = useRef<IXphDialogActionType>(null);
  const secondDialogRef = useRef<IXphDialogActionType>(null);
  const thirdDialogRef = useRef<IXphDialogActionType>(null);
  const maskDialogRef = useRef<IXphDialogActionType>(null);
  const bodyMaskDialogRef = useRef<IXphDialogActionType>(null);
  const firstDialogProps: IXphDialogProps = {
    title: "弹窗1标题",
    width: 1000,
    height: 1200,
    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),
  };

  const secondDialogProps: IXphDialogProps = {
    // mask: true,
    title: "弹窗2标题",
    width: 500,
    height: 500,
    // height: 1200,
    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),
  };

  const [thirdWidth, setThirdWidth] = useState(300);
  const thirdDialogProps: IXphDialogProps = {
    mask: false,
    title: "弹窗3标题",
    width: thirdWidth,
    height: 300,
    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),
  };

  const maskDialogProps: IXphDialogProps = {
    title: "带遮罩的弹窗",
    width: 400,
    height: 300,
    mask: true,
    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),
    onOk: async () => maskDialogRef.current?.close(),
    onCancel: async () => maskDialogRef.current?.close(),
  };

  const bodyMaskDialogProps: IXphDialogProps = {
    title: "全屏遮罩弹窗",
    width: 400,
    height: 300,
    mask: true,
    // 不配置 getPopperContainer，默认挂载到 document.body。
    onOk: async () => bodyMaskDialogRef.current?.close(),
    onCancel: async () => bodyMaskDialogRef.current?.close(),
  };

  const inputRef = useRef<any>(null);

  const onOpenFirstDialog = () => {
    firstDialogRef.current?.open();
  };

  const onOpenSecondDialog = () => {
    secondDialogRef.current?.open();
  };

  const onOpenThirdDialog = () => {
    thirdDialogRef.current?.open();
  };

  const onOpenMaskDialog = () => {
    maskDialogRef.current?.open();
  };

  const onOpenBodyMaskDialog = () => {
    bodyMaskDialogRef.current?.open();
  };

  const onConsoleChildrenDom = () => {
    console.log(inputRef);
  };

  const onChangeThirdWidth = () => {
    setThirdWidth(400);
  };

  /** 弹窗1的内容组件 */
  const Content = () => {
    console.log("渲染Content");
    return (
      <div style={{ width: "1200px", height: "1200px" }}>
        <>我是弹窗1</>
        <div>
          <Input />
        </div>
      </div>
    );
  };

  return (
    <div
      id="docs-comp-dialog-base"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={onOpenFirstDialog}>点击打开XphDialog弹窗1</Button>
        <Button onClick={onOpenSecondDialog}>点击打开XphDialog弹窗2</Button>
        <Button onClick={onOpenThirdDialog}>点击打开XphDialog弹窗3</Button>
        <Button onClick={onOpenMaskDialog}>点击打开带遮罩的弹窗</Button>
        <Button onClick={onOpenBodyMaskDialog}>点击打开全屏遮罩弹窗</Button>
        <Button onClick={onConsoleChildrenDom}>点击打印弹窗2子元素</Button>
        <Button onClick={onChangeThirdWidth}>点击动态改变弹窗3宽度</Button>
      </div>
      {/** 用来测试父元素有滚动条的情况 */}
      <div style={{ width: "1200px", height: "1200px" }}></div>

      <XphDialog {...firstDialogProps} ref={firstDialogRef}>
        <Content />
      </XphDialog>
      <XphDialog {...secondDialogProps} ref={secondDialogRef}>
        <Input ref={inputRef} />
      </XphDialog>
      <XphDialog {...thirdDialogProps} ref={thirdDialogRef}>
        我是弹窗3
      </XphDialog>
      <XphDialog {...maskDialogProps} ref={maskDialogRef}>
        我是带遮罩的弹窗
      </XphDialog>
      <XphDialog {...bodyMaskDialogProps} ref={bodyMaskDialogRef}>
        我是默认挂载到 body 的全屏遮罩弹窗
      </XphDialog>
    </div>
  );
};

export default ReactApp;

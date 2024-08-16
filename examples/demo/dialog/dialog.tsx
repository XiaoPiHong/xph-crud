import React, { useRef } from "react";
import { Input } from "antd";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const firstDialogRef = useRef<IXphDialogActionType>(null);
  const secondDialogRef = useRef<IXphDialogActionType>(null);
  const thirdDialogRef = useRef<IXphDialogActionType>(null);
  const firstDialogProps: IXphDialogProps = {
    mask: true,
    title: "弹窗1标题",
    width: 1000,
    getPopperContainer: () => document.getElementById("dialog-box"),
  };

  const secondDialogProps: IXphDialogProps = {
    mask: true,
    title: "弹窗2标题",
    width: 500,
    // height: 1200,
    getPopperContainer: () => document.getElementById("dialog-box"),
  };

  const thirdDialogProps: IXphDialogProps = {
    mask: false,
    title: "弹窗3标题",
    getPopperContainer: () => document.getElementById("dialog-box"),
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

  const onConsoleChildrenDom = () => {
    console.log(inputRef);
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
      id="dialog-box"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      {/** 用来测试父元素有滚动条的情况 */}
      <button onClick={onOpenFirstDialog}>点击打开XphDialog弹窗1</button>
      <button onClick={onOpenSecondDialog}>点击打开XphDialog弹窗2</button>
      <button onClick={onOpenThirdDialog}>点击打开XphDialog弹窗3</button>
      <button onClick={onConsoleChildrenDom}>点击打印子元素</button>
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
    </div>
  );
};

export default ReactApp;

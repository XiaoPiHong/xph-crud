import { useEffect } from "react";

const useTopShowDialog = ({
  visible,
  dialogRef,
  minimizeRef,
  container,
}: {
  visible: boolean;
  dialogRef: React.RefObject<HTMLDivElement>;
  minimizeRef: React.RefObject<HTMLDivElement>;
  container: HTMLElement;
}) => {
  const insertAfterFunny = (newNode, referenceNode) => {
    console.log("触发插入");
    // // 创建一个透明的占位符
    // const placeholder = document.createElement("div");
    // placeholder.style.visibility = "hidden";

    // // 插入占位符
    // referenceNode.parentNode.insertBefore(
    //   placeholder,
    //   referenceNode.nextSibling
    // );

    // // 插入新节点到占位符位置
    // referenceNode.parentNode.insertBefore(newNode, placeholder);

    // // 移除占位符
    // referenceNode.parentNode.removeChild(placeholder);

    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  };

  const onMousedownDialog = (e?: MouseEvent) => {
    const allDialog = container.querySelectorAll(".xph-dialog");
    const lastDialog = allDialog[allDialog.length - 1];
    if (dialogRef.current?.parentNode === lastDialog) return;
    insertAfterFunny(dialogRef.current?.parentNode, lastDialog);

    // 如果点击的是输入框自动聚焦
    if (e) {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" && target.focus) target.focus();
    }
  };

  useEffect(() => {
    // 捕获阶段
    dialogRef.current?.addEventListener("mousedown", onMousedownDialog, true);
    minimizeRef.current?.addEventListener("mousedown", onMousedownDialog, true);
    return () => {
      dialogRef.current?.removeEventListener(
        "mousedown",
        onMousedownDialog,
        true
      );
      minimizeRef.current?.removeEventListener(
        "mousedown",
        onMousedownDialog,
        true
      );
    };
  }, []);

  useEffect(() => {
    /** 每次打开的时候打开的弹窗都是在最上层 */
    if (visible) {
      onMousedownDialog();
    }
  }, [visible]);
};

export default useTopShowDialog;

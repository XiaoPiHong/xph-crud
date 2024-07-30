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
  const dialogTopShowClassConfig = {
    xphDialog: "xph--dialog",
    xphDialogWrapper: "xph--dialog--wrapper",
  };

  const insertAfterFunny = (newNode, referenceNode) => {
    console.log("触发插入");
    newNode.querySelector(
      `.${dialogTopShowClassConfig.xphDialogWrapper}`
    ).style.opacity = "unset";
    referenceNode.querySelector(
      `.${dialogTopShowClassConfig.xphDialogWrapper}`
    ).style.opacity = 0.7;

    //==========================================================插入操作start
    // 创建一个透明的占位符
    const placeholder = document.createElement("div");
    placeholder.style.visibility = "hidden";

    // 插入占位符
    referenceNode.parentNode.insertBefore(
      placeholder,
      referenceNode.nextSibling
    );

    // 插入新节点到占位符位置
    referenceNode.parentNode.insertBefore(newNode, placeholder);

    // 移除占位符
    referenceNode.parentNode.removeChild(placeholder);

    // referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    //==========================================================插入操作end
  };

  const onMousedownDialog = (e?: MouseEvent) => {
    const allDialog = container.querySelectorAll(
      `.${dialogTopShowClassConfig.xphDialog}`
    );
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
    dialogRef.current?.addEventListener("mousedown", onMousedownDialog, false);
    minimizeRef.current?.addEventListener(
      "mousedown",
      onMousedownDialog,
      false
    );
    return () => {
      dialogRef.current?.removeEventListener(
        "mousedown",
        onMousedownDialog,
        false
      );
      minimizeRef.current?.removeEventListener(
        "mousedown",
        onMousedownDialog,
        false
      );
    };
  }, []);

  useEffect(() => {
    /** 每次打开的时候打开的弹窗都是在最上层 */
    if (visible) {
      onMousedownDialog();
    } else {
      /** 每次关闭的时候将显示的弹窗中最后一个弹窗移动到最上层 */
      const allDialogs = Array.from(
        container.querySelectorAll(`.${dialogTopShowClassConfig.xphDialog}`)
      );
      const allDialogWrappers = allDialogs
        .map((dialog) =>
          dialog.querySelector(`.${dialogTopShowClassConfig.xphDialogWrapper}`)
        )
        .filter((dialogWrapper) => dialogWrapper !== null) as HTMLElement[];

      const lastShowDialogWrapper = allDialogWrappers.find(
        (dialogWrapper) => dialogWrapper.style.display === "flex"
      );

      if (lastShowDialogWrapper) {
        insertAfterFunny(
          lastShowDialogWrapper.parentNode,
          allDialogs[allDialogs.length - 1]
        );
      }
    }
  }, [visible]);

  return { dialogTopShowClassConfig };
};

export default useTopShowDialog;

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
  /** 用于操作dom的标识 */
  const dialogTopShowClassConfig = {
    xphDialog: "xph--dialog",
    xphDialogWrapper: "xph--dialog--wrapper",
    xphMinimizeDialog: "xph--dialog--minimize",
  };

  const insertAfterFunny = (newNode, referenceNode) => {
    console.log("触发插入");
    newNode.querySelector(
      `.${dialogTopShowClassConfig.xphDialogWrapper}`
    ).style.opacity = "unset";
    newNode.querySelector(
      `.${dialogTopShowClassConfig.xphMinimizeDialog}`
    ).style.opacity = "unset";
    referenceNode.querySelector(
      `.${dialogTopShowClassConfig.xphDialogWrapper}`
    ).style.opacity = 0.7;
    referenceNode.querySelector(
      `.${dialogTopShowClassConfig.xphMinimizeDialog}`
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
    const allDialog = Array.from(
      container.querySelectorAll(`.${dialogTopShowClassConfig.xphDialog}`)
    ).filter((item) => item?.parentNode === container);
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
    /** 每次打开的时候打开的弹窗都是在最上层（只限父元素相同的弹窗） */
    if (visible) {
      onMousedownDialog();
    } else {
      /** 每次关闭的时候将显示的弹窗中最后一个弹窗移动到最上层（只限父元素相同的弹窗） */
      const allDialogs = Array.from(
        container.querySelectorAll(`.${dialogTopShowClassConfig.xphDialog}`)
      ).filter((item) => item?.parentNode === container);
      const allDialogWrappers = allDialogs
        .map((dialog) =>
          dialog.querySelector(`.${dialogTopShowClassConfig.xphDialogWrapper}`)
        )
        .filter((dialogWrapper) => dialogWrapper !== null) as HTMLElement[];

      const allMinimizeDialogs = allDialogs
        .map((dialog) =>
          dialog.querySelector(`.${dialogTopShowClassConfig.xphMinimizeDialog}`)
        )
        .filter((dialogWrapper) => dialogWrapper !== null) as HTMLElement[];

      const allShowDialogWrapper = allDialogWrappers.filter(
        (dialogWrapper) => dialogWrapper.style.display === "flex"
      );

      const allShowMinimizeDialog = allMinimizeDialogs.filter(
        (dialogWrapper) => dialogWrapper.style.display === "flex"
      );

      /** 有显示的弹窗，则打开最后一个显示的弹窗 */
      if (allShowDialogWrapper.length) {
        insertAfterFunny(
          allShowDialogWrapper[allShowDialogWrapper.length - 1].parentNode,
          allDialogs[allDialogs.length - 1]
        );
        return;
      }

      /** 有最小化的弹窗，则打开最后一个最小化的弹窗 */
      if (allShowMinimizeDialog.length) {
        insertAfterFunny(
          allShowMinimizeDialog[allShowMinimizeDialog.length - 1].parentNode,
          allDialogs[allDialogs.length - 1]
        );
        return;
      }
    }
  }, [visible]);

  return { dialogTopShowClassConfig };
};

export default useTopShowDialog;

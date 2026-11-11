import { useLayoutEffect, useState } from "react";

interface DialogLayer {
  container: HTMLElement;
  setStack: (stack: { zIndex: number; active: boolean }) => void;
}

// 统一分配层级以兼容 body 与指定容器混用；视觉激活仍按容器隔离。
// 注册只存活于打开期间，关闭/卸载清理，绝不移动 Portal 的 DOM。
const visibleLayers = new Set<DialogLayer>();
const dialogTopShowClassConfig = {
  xphDialog: "xph--dialog",
  xphDialogWrapper: "xph--dialog--wrapper",
  xphMinimizeDialog: "xph--dialog--minimize",
};

const updateStack = () => {
  const ordered = Array.from(visibleLayers);
  const topByContainer = new Map<HTMLElement, DialogLayer>();
  ordered.forEach((layer) => topByContainer.set(layer.container, layer));
  ordered.forEach((layer, index) =>
    layer.setStack({
      zIndex: 999 + index,
      active: topByContainer.get(layer.container) === layer,
    })
  );
};

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
  const [stack, setStack] = useState({ zIndex: 999, active: false });

  useLayoutEffect(() => {
    if (!visible) {
      setStack((previous) =>
        previous.active ? { ...previous, active: false } : previous
      );
      return;
    }
    const layer: DialogLayer = {
      container,
      setStack: (next) => setStack((previous) =>
        previous.zIndex === next.zIndex && previous.active === next.active
          ? previous
          : next
      ),
    };
    const bringToFront = () => {
      visibleLayers.delete(layer);
      visibleLayers.add(layer);
      updateStack();
    };
    const dialog = dialogRef.current;
    const minimized = minimizeRef.current;
    dialog?.addEventListener("mousedown", bringToFront);
    minimized?.addEventListener("mousedown", bringToFront);
    bringToFront();

    return () => {
      dialog?.removeEventListener("mousedown", bringToFront);
      minimized?.removeEventListener("mousedown", bringToFront);
      visibleLayers.delete(layer);
      updateStack();
    };
  }, [container, visible, dialogRef, minimizeRef]);

  return { dialogTopShowClassConfig, ...stack };
};

export default useTopShowDialog;

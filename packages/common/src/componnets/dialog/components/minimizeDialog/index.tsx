import { forwardRef } from "react";
import style from "./index.module.css";

interface IMinimizeDialogProps {
  left: number;
  top: number;
  visible: boolean;
  title?: string;
  onMaximize?: () => void;
  onClosesquare?: () => void;
}

const MinimizeDialog = forwardRef<HTMLDivElement, IMinimizeDialogProps>(
  ({ title, left, top, visible, onMaximize, onClosesquare }, ref) => {
    return (
      <div
        style={{ display: visible ? "flex" : "none", left, top }}
        className={style["minimize-windows"]}
        ref={ref}
      >
        <div className={style["minimize-windows-title"]} title={title}>
          {title}
        </div>
        <div className={style["minimize-windows-operate"]}>
          <button onClick={onMaximize}>最大化</button>
          <button onClick={onClosesquare}>关闭</button>
        </div>
      </div>
    );
  }
);

export default MinimizeDialog;

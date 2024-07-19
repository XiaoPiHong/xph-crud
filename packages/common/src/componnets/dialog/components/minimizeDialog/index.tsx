import { forwardRef } from "react";
import style from "./index.module.css";

interface IMinimizeDialogProps {
  left: number;
  top: number;
  visible: boolean;
  title?: string;
  maximize?: () => void;
  closesquare?: () => void;
}

const MinimizeDialog = forwardRef<HTMLDivElement, IMinimizeDialogProps>(
  ({ title, left, top, visible, maximize, closesquare }, ref) => {
    return (
      <div
        style={{ display: visible ? "flex" : "none", left, top }}
        className={style["minimize-windows"]}
        ref={ref}
      >
        <div className={style["minimize-windows-title"]} title={title}>
          {title}
        </div>
        <div className={style["minimize-windows-title"]}>
          <button onClick={maximize}>最大化</button>
          <button onClick={closesquare}>关闭</button>
        </div>
      </div>
    );
  }
);

export default MinimizeDialog;

import { forwardRef } from "react";
import style from "./index.module.css";
import { Maximize, Close } from "../headerBtns";

interface IMinimizeDialogProps {
  left: number;
  top: number;
  visible: boolean;
  title?: string;
  className: string;
  onMaximize?: () => void;
  onClosesquare?: () => void;
}

const MinimizeDialog = forwardRef<HTMLDivElement, IMinimizeDialogProps>(
  (
    { title, left, top, visible, onMaximize, onClosesquare, className },
    ref
  ) => {
    return (
      <div
        style={{ display: visible ? "flex" : "none", left, top }}
        className={`${style["minimize-windows"]} ${className}`}
        ref={ref}
      >
        <div className={style["minimize-windows-title"]} title={title}>
          {title}
        </div>
        <div className={style["minimize-windows-operate"]}>
          <Maximize onClick={onMaximize} />
          <Close onClick={onClosesquare} />
        </div>
      </div>
    );
  }
);

export default MinimizeDialog;

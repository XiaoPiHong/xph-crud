import { forwardRef } from "react";
import style from "./index.module.css";
import { Maximize, Close } from "../headerBtns";
import { theme } from "antd";

interface IMinimizeDialogProps {
  left: number;
  top: number;
  visible: boolean;
  title?: string;
  className: string;
  onMaximize?: () => void;
  onClosesquare?: () => void;
}

const { useToken } = theme;

const MinimizeDialog = forwardRef<HTMLDivElement, IMinimizeDialogProps>(
  (
    { title, left, top, visible, onMaximize, onClosesquare, className },
    ref
  ) => {
    /** 获取继承过来的样式 */
    const { token } = useToken();
    const contentStyle: React.CSSProperties = {
      borderRadius: token.borderRadiusLG,
    };

    return (
      <div
        style={{
          display: visible ? "flex" : "none",
          left,
          top,
          ...contentStyle,
        }}
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

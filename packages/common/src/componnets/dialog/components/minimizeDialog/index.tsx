import { forwardRef } from "react";
import style from "./index.module.css";
import { Button } from "antd";
import { CloseOutlined, FullscreenOutlined } from "@ant-design/icons";

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
          <Button
            type="link"
            onClick={onMaximize}
            icon={
              <FullscreenOutlined
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              />
            }
          />
          <Button
            type="link"
            onClick={onClosesquare}
            icon={
              <CloseOutlined
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              />
            }
          />
        </div>
      </div>
    );
  }
);

export default MinimizeDialog;

import { ButtonProps } from "antd";

export interface IDialogProps {
  width?: number;
  height?: number;
  mask?: boolean;
  title?: string;
  okProps?: Omit<ButtonProps, "children" | "onClick">;
  cancelProps?: Omit<ButtonProps, "children" | "onClick">;
  okText?: string;
  cancelText?: string;
  /** 点击确定按钮触发该事件 */
  onOk?: (args) => Promise<void>;
  /** 点击取消按钮触发该事件 */
  onCancel?: (args) => Promise<void>;
  renderFooter?: () => React.ReactElement;
  renderTitle?: () => React.ReactElement;
  /** 打开的时候会触发该事件 */
  onOpen?: () => void;
  /** 关闭的时候会触发该事件 */
  onClose?: () => void;
  /** 挂载弹窗的容器，默认是body */
  getPopperContainer?: () => HTMLElement | null;
}

export interface IDialogActionType {
  open: () => Promise<void>;
  close: () => void;
}

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
  onOk?: () => void;
  onCancel?: () => void;
  renderFooter?: () => React.ReactElement;
  renderTitle?: () => React.ReactElement;
  onOpen?: () => void;
  onClose?: () => void;
  /** 挂载弹窗的容器，默认是body */
  getPopperContainer?: () => HTMLElement | null;
}

export interface IDialogActionType {
  open: () => void;
  close: () => void;
}

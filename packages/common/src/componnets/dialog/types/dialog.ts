import { ButtonProps } from "antd";

export interface IDialogProps {
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
}

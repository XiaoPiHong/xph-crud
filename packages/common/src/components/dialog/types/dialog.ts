import { ButtonProps } from "antd";

export interface IDialogProps {
  /**
   * @default 700
   * @description 弹窗的宽度
   */
  width?: number;
  /**
   * @default -
   * @description 弹窗的高度
   */
  height?: number;
  /**
   * @default false
   * @description 是否显示遮罩
   */
  mask?: boolean;
  /**
   * @default -
   * @description 弹窗的标题
   */
  title?: string;
  /**
   * @default -
   * @description 确定按钮属性
   */
  okProps?: Omit<ButtonProps, "children" | "onClick">;
  /**
   * @default -
   * @description 取消按钮属性
   */
  cancelProps?: Omit<ButtonProps, "children" | "onClick">;
  /**
   * @default "确定"
   * @description 确定按钮文字
   */
  okText?: string;
  /**
   * @default "取消"
   * @description 取消按钮文字
   */
  cancelText?: string;
  /**
   * @default -
   * @description 点击确定按钮触发该事件
   */
  onOk?: (args) => Promise<void>;
  /**
   * @default -
   * @description 点击取消按钮触发该事件
   */
  onCancel?: (args) => Promise<void>;
  /**
   * @default -
   * @description 底部按钮自定义渲染函数
   */
  renderFooter?: ({ loading }: { loading: boolean }) => React.ReactElement;
  /**
   * @default -
   * @description 顶部标题自定义渲染函数
   */
  renderTitle?: () => React.ReactElement;
  /**
   * @default -
   * @description 打开的时候会触发该事件
   */
  onOpen?: () => void;
  /**
   * @default -
   * @description 关闭的时候会触发该事件
   */
  onClose?: () => void;
  /**
   * @default () => document.body
   * @description 挂载弹窗的容器
   */
  getPopperContainer?: () => HTMLElement | null;
}

export interface IDialogActionType {
  open: () => Promise<void>;
  close: () => void;
  setLoading: (loading: boolean) => void;
  getVisible: () => boolean;
}

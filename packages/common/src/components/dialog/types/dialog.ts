import { ButtonProps } from "antd";

export interface IDialogProps {
  /**
   * 弹窗的宽度
   * @defaultValue `700`
   */
  width?: number;
  /**
   * 弹窗的高度
   * @defaultValue `-`
   */
  height?: number;
  /**
   * 是否显示遮罩
   * @defaultValue `false`
   */
  mask?: boolean;
  /**
   * 弹窗的标题
   * @defaultValue `-`
   */
  title?: string;
  /**
   * 确定按钮属性
   * @defaultValue `-`
   */
  okProps?: Omit<ButtonProps, "children" | "onClick">;
  /**
   * 取消按钮属性
   * @defaultValue `-`
   */
  cancelProps?: Omit<ButtonProps, "children" | "onClick">;
  /**
   * 确定按钮文字
   * @defaultValue `"确定"`
   */
  okText?: string;
  /**
   * 取消按钮文字
   * @defaultValue `"取消"`
   */
  cancelText?: string;
  /**
   * 点击确定按钮触发该事件
   * @defaultValue `-`
   */
  onOk?: (args) => Promise<void>;
  /**
   * 点击取消按钮触发该事件
   * @defaultValue `-`
   */
  onCancel?: (args) => Promise<void>;
  /**
   * 底部按钮自定义渲染函数
   * @defaultValue `-`
   */
  renderFooter?: ({ loading }: { loading: boolean }) => React.ReactElement;
  /**
   * 顶部标题自定义渲染函数
   * @defaultValue `-`
   */
  renderTitle?: () => React.ReactElement;
  /**
   * 打开的时候会触发该事件
   * @defaultValue `-`
   */
  onOpen?: () => void;
  /**
   * 关闭的时候会触发该事件
   * @defaultValue `-`
   */
  onClose?: () => void;
  /**
   * 挂载弹窗的容器
   * @defaultValue `() => document.body`
   */
  getPopperContainer?: () => HTMLElement | null;
}

export interface IDialogActionType {
  /**
   * 打开
   */
  open: () => Promise<void>;
  /**
   * 关闭
   */
  close: () => void;
  /**
   * 设置loading
   */
  setLoading: (loading: boolean) => void;
  /**
   * 获取弹窗状态
   */
  getVisible: () => boolean;
}

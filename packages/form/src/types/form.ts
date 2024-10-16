import { TFormItemProps, Recordable } from "./formItem";
import { ColProps } from "antd";
import { NamePath } from "antd/lib/form/interface";
import { TXphExtendComponentPropsMap } from "xph-crud/common";

export interface IRegister {
  (methods: IFormActionType): void;
}

export interface IFormProps<T extends TXphExtendComponentPropsMap = {}> {
  /**
   * @default []
   * @description 表单项配置集合
   */
  items: TFormItemProps<T>[];
  /**
   * @default "horizontal"
   * @description 表单布局方式，排除了antd的inline，因为可以使用colProps实现inline布局
   */
  layout?: "horizontal" | "vertical";
  /**
   * @default false
   * @description 表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)
   */
  colon?: boolean;
  /**
   * @default -
   * @description 设置表单组件禁用，仅对 antd 组件有效
   */
  disabled?: boolean;
  /**
   * @default -
   * @description 表单项组件布局方式(wrapperCol的span与labelCol的span形成24栅格布局)
   */
  wrapperCol?: ColProps;
  /**
   * @default true
   * @description label 标签的文本换行方式
   */
  labelWrap?: boolean;
  /**
   * @default -
   * @description label 标签的文本对齐方式
   */
  labelAlign?: "left" | "right";
  /**
   * @default -
   * @description 表单项label标签布局方式(wrapperCol的span与labelCol的span形成24栅格布局)
   */
  labelCol?: ColProps;
  /**
   * @default -
   * @description 表单项的栅格配置
   */
  colProps?: ColProps;
  /**
   * @default -
   * @description 提交失败自动滚动到第一个错误字段
   */
  scrollToFirstError?: boolean;
  /**
   * @default -
   * @description 设置字段组件的尺寸（仅限 antd 组件）
   */
  size?: "large" | "middle" | "small";
  /**
   * @default -
   * @description 是否可折叠，默认超过5个折叠
   */
  collapsible?: boolean;
  /**
   * @default 5
   * @description 超过多少进行折叠，collapsible为true才生效
   */
  collapseNum?: number;
  /**
   * @default -
   * @description 渲染操作组，用于渲染表单项的操作，这是一个预留项，是否需要操作组由业务自己决定（会跟折叠同行显示）
   */
  renderActions?: () => React.ReactElement;
  /**
   * @default (date: any, format: string) => { return date?.format?.(format || "YYYY-MM-DD HH:mm:ss") ?? date; }
   * @description 时间返回统一处理函数
   */
  transformDateFunc?: (date: any, format: string) => string;
  /**
   * @default -
   * @description 用于将表单内时间区域的应设成 2 个字段，见下方案例
   * @example
   *
   * // 场景：如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段
   *
   * fieldMapToTime: [
   *    // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间与结束时间
   *    // 'YYYY-MM-DD'为时间格式，参考moment
   *    ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
   *    // 支持多个字段
   *    ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
   * ]
   *
   * // fieldMapToTime没写的时候表单获取到的值
   * {
   *   datetime: [Date(),Date()]
   * }
   *
   * //  ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],等同于 dayjs(Date()).format('YYYY-MM-DD'). 之后
   * {
   *     startTime: '2020-08-12',
   *     endTime: '2020-08-15',
   * }
   *
   * // ['datetime', ['startTime', 'endTime'], 'timestamp'],等同于 dayjs(Date()).unix(). 之后
   * {
   *     startTime: 1597190400,
   *     endTime: 1597449600,
   * }
   *
   * // ['datetime', ['startTime', 'endTime'], 'timestampStartDay'],等同于 dayjs(Date()).startOf('day').unix(). 之后
   * {
   *     startTime: 1597190400,
   *     endTime: 1597449600,
   * }
   */
  fieldMapToTime?: [string, [string, string], (string | [string, string])?][];
  /**
   * @default -
   * @description 注册事件（useForm使用，form组件会在挂载后调用）
   */
  register?: IRegister;
}

export interface IFormActionType {
  getFieldsValue: (...values) => Recordable<any>;
  setFieldsValue: (values: Recordable<any>) => void;
  resetFields: () => Promise<void>;
  validator: (nameList?: NamePath[]) => Promise<any>;
  scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
}

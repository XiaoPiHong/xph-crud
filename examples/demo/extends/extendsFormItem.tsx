import React from "react";
import {
  XphForm,
  IXphFormActionType,
  XphExtendCompPropsProvider,
} from "xph-crud";

/** 自定义表单项的属性 */
interface IMyInputProps {
  /** input边框的颜色 */
  borderColor?: string;
  /** onChange是默认透传进来的，如果表单model需要捕获当前自定义项的值，需要在自定义组件内部手动触发onChange事件，并且将值传递给其首个参数 */
  onChange?: (...args) => void;
}

/**
 * 自定义表单项
 * （myInputProps就是初始化时候当前对应项的componentProps）
 */
const MyInput = (myInputProps: IMyInputProps) => {
  const { borderColor, onChange } = myInputProps;
  const onInputChange = (e) => {
    const {
      target: { value },
    } = e;
    /** 手动触发onChange改变表单项对应的值,将表单需要捕获到的值传递到其首个参数 */
    onChange && onChange(value);
  };
  return (
    <input
      onInput={onInputChange}
      style={{ borderColor: borderColor ? borderColor : "black" }}
    />
  );
};

/**
 * 表单项的映射对象
 */
const myComponentMap = {
  MyInput,
};

const ReactApp: React.FC = () => {
  const props = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    items: [
      {
        name: "MyInput",
        label: "MyInput",
        component: "MyInput",
        colProps: { span: 8 },
        componentProps: {
          /** 此处的属性都会传递给myInputProps */
          borderColor: "red",
        },
      },
      {
        name: "Button",
        label: "获取表单值",
        component: "Button",
        colProps: { span: 8 },
        componentProps: {
          children: "点击我获取表单的值",
          onClick: async () => {
            console.log(reactFormRef.current?.getFieldsValue(true));
          },
        },
      },
    ],
  };

  const reactFormRef = React.useRef<IXphFormActionType>(null);

  return (
    <div style={{ minWidth: "1400px" }}>
      <XphExtendCompPropsProvider
        value={{ extendComp: { form: myComponentMap } }}
      >
        <XphForm ref={reactFormRef} {...props}></XphForm>
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;

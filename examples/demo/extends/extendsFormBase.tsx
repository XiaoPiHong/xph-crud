import React from "react";
import { XphForm, XphExtendCompPropsProvider } from "xph-crud";

const MyButton = ({ children }) => {
  return <button>{children}</button>;
};

const MyInput = () => {
  return <input></input>;
};

/**
 * 表单项的映射对象
 */
const myComponentMap = {
  MyButton,
  MyInput,
};

const ReactApp: React.FC = () => {
  const props = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    items: [
      {
        name: "MyButton",
        label: "MyButton",
        component: "MyButton",
        colProps: { span: 8 },
        componentProps: {
          children: "我是自定义的按钮",
        },
      },
      {
        name: "MyInput",
        label: "MyInput",
        component: "MyInput",
        colProps: { span: 8 },
        componentProps: {},
      },
    ],
  };

  return (
    <div style={{ minWidth: "1400px" }}>
      <XphExtendCompPropsProvider
        value={{ extendComp: { form: myComponentMap } }}
      >
        <XphForm {...props}></XphForm>
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;

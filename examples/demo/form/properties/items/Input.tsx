import React from "react";
import { XphForm } from "xph-crud";

const ReactApp: React.FC = () => {
  const props = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        componentProps: {
          /** 此处为antd Input组件的属性 */
          placeholder: "我是Input",
        },
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

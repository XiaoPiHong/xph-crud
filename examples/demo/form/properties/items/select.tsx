import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Select",
        label: "Select",
        component: "Select",
        componentProps: {
          /** 此处为antd Select组件的属性 */
          placeholder: "我是Select",
          options: [
            { label: "选项1", value: "选项1" },
            { label: "选项2", value: "选项2" },
            { label: "选项3", value: "选项3" },
          ],
        },
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

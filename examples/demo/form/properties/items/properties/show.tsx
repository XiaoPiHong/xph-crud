import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        required: true,
        componentProps: {},
      },
      {
        name: "Select",
        label: "Select",
        component: "Select",
        componentProps: {
          allowClear: true,
          placeholder: "Select",
          options: [
            { label: "测试", value: "1" },
            { label: "测试2", value: "2" },
          ],
        },
        initialValue: "1",
        show: ({ model }) => {
          // Input有值才显示（相当于display:none）
          return model.Input;
        },
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

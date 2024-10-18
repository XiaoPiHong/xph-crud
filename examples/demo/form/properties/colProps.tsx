import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    colProps: { span: 4 },
    items: [
      {
        name: "Input1",
        label: "Input1",
        component: "Input",
        componentProps: {},
      },
      {
        name: "Input2",
        label: "Input2",
        component: "Input",
        componentProps: {},
        colProps: {
          span: 20, // 优先级高于表单的colProps
        },
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

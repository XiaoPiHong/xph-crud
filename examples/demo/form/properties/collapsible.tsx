import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    collapsible: true, // 开启折叠
    collapseNum: 2, // 超出两个折叠（collapsible为true才生效）
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
      },
      {
        name: "Input3",
        label: "Input3",
        component: "Input",
        componentProps: {},
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

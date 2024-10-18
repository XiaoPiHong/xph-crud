import React, { useState } from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const [layout, seLayout] = useState<"vertical" | "horizontal">("vertical");

  const props: IXphFormProps = {
    layout,
    colProps: { span: 4, offset: 1 },
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
        name: "Button",
        label: "切换布局",
        component: "Button",
        componentProps: {
          onClick: () => {
            seLayout(layout === "vertical" ? "horizontal" : "vertical");
          },
          children: "切换布局",
        },
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

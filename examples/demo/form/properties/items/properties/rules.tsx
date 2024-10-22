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
        name: "Transfer",
        label: "Transfer",
        component: "Transfer",
        valuePropName: "targetKeys",
        initialValue: ["1"],
        componentProps: {
          dataSource: [
            {
              key: "1",
              title: "标题1",
            },
            {
              key: "2",
              title: "标题2",
            },
          ],
          render: (item) => item.title,
        },
        rules: [
          {
            required: true,
            type: "array",
            message: "Transfer必填",
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "ApiTransfer",
        label: "ApiTransfer",
        component: "ApiTransfer",
        valuePropName: "targetKeys",
        initialValue: ["1"],
        componentProps: ({ model }) => {
          return {
            params: { a: model.Select },
            api: async (params) => {
              // console.log(params, "GET ApiTransfer===========================");
              return [
                {
                  key: "1",
                  title: "标题1",
                },
                {
                  key: "2",
                  title: "标题2",
                },
              ];
            },
            render: (item) => item.title,
          };
        },
        rules: [
          {
            required: true,
            type: "array",
            message: "ApiTransfer必填",
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

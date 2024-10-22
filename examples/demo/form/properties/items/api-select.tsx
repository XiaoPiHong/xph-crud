import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "ApiSelect",
        label: "ApiSelect",
        component: "ApiSelect",
        componentProps: ({ model }) => {
          return {
            placeholder: "ApiSelect",
            allowClear: true,
            immediate: true,
            params: { a: model.Select },
            api: async (params) => {
              console.log(params, "GET ApiSelect===========================");
              return [
                { label: "测试", value: "1" },
                { label: "测试2", value: "2" },
              ];
            },
          };
        },
        initialValue: "1",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

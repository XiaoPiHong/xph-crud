import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "ApiTreeSelect",
        label: "ApiTreeSelect",
        component: "ApiTreeSelect",
        componentProps: ({ model }) => {
          return {
            placeholder: "请选择ApiTreeSelect",
            params: { a: model.Select },
            immediate: true,
            api: async (params) => {
              console.log(
                params,
                "GET ApiTreeSelect==========================="
              );
              return [
                {
                  value: "parent 1",
                  title: "parent 1",
                  children: [
                    {
                      value: "parent 1-0",
                      title: "parent 1-0",
                      children: [
                        {
                          value: "leaf1",
                          title: "leaf1",
                        },
                        {
                          value: "leaf2",
                          title: "leaf2",
                        },
                      ],
                    },
                    {
                      value: "parent 1-1",
                      title: "parent 1-1",
                      children: [
                        {
                          value: "leaf3",
                          title: <b style={{ color: "#08c" }}>leaf3</b>,
                        },
                      ],
                    },
                  ],
                },
              ];
            },
          };
        },
        initialValue: "leaf3",
        rules: [
          {
            required: true,
            message: "ApiTreeSelect必填",
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

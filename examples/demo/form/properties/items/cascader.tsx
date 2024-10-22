import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Cascader",
        label: "Cascader",
        component: "Cascader",
        componentProps: {
          placeholder: "请选择Cascader",
          options: [
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                  children: [
                    {
                      value: "xihu",
                      label: "West Lake",
                    },
                  ],
                },
              ],
            },
          ],
        },
        initialValue: ["zhejiang", "hangzhou", "xihu"],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "ApiAutoComplete",
        label: "ApiAutoComplete",
        component: "ApiAutoComplete",
        componentProps: ({ model }) => {
          return {
            params: { a: model.Select },
            immediate: true,
            api: async (params) => {
              console.log(
                params,
                "GET ApiAutoComplete==========================="
              );
              return [
                { value: "Burns Bay Road" },
                { value: "Downing Street" },
                { value: "Wall Street" },
              ];
            },
          };
        },
        initialValue: "Burns Bay Road",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

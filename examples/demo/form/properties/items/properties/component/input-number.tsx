import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "InputNumber",
        label: "InputNumber",
        component: "InputNumber",
        componentProps: {
          onBlur: (e) => {
            console.log(e);
          },
          onChange: (e) => {
            console.log(e);
          },
        },
        initialValue: 2,
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

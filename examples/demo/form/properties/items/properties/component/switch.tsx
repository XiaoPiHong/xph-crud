import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Switch",
        label: "Switch",
        component: "Switch",
        componentProps: {},
        initialValue: true,
        valuePropName: "checked",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

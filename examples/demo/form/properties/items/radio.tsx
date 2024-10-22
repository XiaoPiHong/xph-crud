import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Radio",
        label: "Radio",
        component: "Radio",
        componentProps: {},
        valuePropName: "checked",
        initialValue: true,
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

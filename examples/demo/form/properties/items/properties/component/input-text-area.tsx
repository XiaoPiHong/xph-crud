import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "InputTextArea",
        label: "InputTextArea",
        component: "InputTextArea",
        componentProps: {},
        initialValue: "123456",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

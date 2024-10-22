import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "InputPassword",
        label: "InputPassword",
        component: "InputPassword",
        componentProps: {},
        initialValue: "123456",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

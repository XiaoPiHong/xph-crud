import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "AutoComplete",
        label: "AutoComplete",
        component: "AutoComplete",
        componentProps: {
          options: [
            { value: "Burns Bay Road" },
            { value: "Downing Street" },
            { value: "Wall Street" },
          ],
        },
        initialValue: "Burns Bay Road",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

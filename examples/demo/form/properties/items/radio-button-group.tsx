import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "RadioButtonGroup",
        label: "RadioButtonGroup",
        component: "RadioGroup",
        componentProps: {
          optionType: "button",
          buttonStyle: "solid",
          options: [
            { label: "A", value: "a", disabled: true },
            { label: "B", value: "b", disabled: false },
            { label: "C", value: "c", disabled: false },
            { label: "D", value: "d", disabled: true },
          ],
        },
        initialValue: "a",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

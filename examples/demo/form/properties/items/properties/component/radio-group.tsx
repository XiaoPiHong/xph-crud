import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "RadioGroup",
        label: "RadioGroup",
        component: "RadioGroup",
        componentProps: {
          options: [
            { label: "A", value: "a" },
            { label: "B", value: "b" },
            { label: "C", value: "c" },
            { label: "D", value: "d" },
          ],
        },
        initialValue: "a",
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "TimePicker",
        label: "TimePicker",
        component: "TimePicker",
        componentProps: {
          format: "HH:mm",
          valueFormat: "HH:mm",
        },
        initialValue: dayjs("12:08", "HH:mm"),
        rules: [
          {
            validator: async (rule, value) => {
              if (!value) {
                return Promise.reject("TimePicker必填");
              }
              return Promise.resolve();
            },
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "DatePicker",
        label: "DatePicker",
        component: "DatePicker",
        componentProps: {
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
        },
        initialValue: dayjs("2021-08-08", "YYYY-MM-DD"),
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

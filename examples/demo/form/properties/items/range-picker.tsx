import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "RangePicker",
        label: "RangePicker",
        component: "RangePicker",
        componentProps: {
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
        },
        initialValue: [
          dayjs("2021-08-01 00:00:00", "YYYY-MM-DD HH:mm:ss"),
          dayjs("2021-08-08 23:59:59", "YYYY-MM-DD HH:mm:ss"),
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

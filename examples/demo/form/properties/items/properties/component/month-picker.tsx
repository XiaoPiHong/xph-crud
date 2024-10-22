import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "MonthPicker",
        label: "MonthPicker",
        component: "MonthPicker",
        componentProps: {
          valueFormat: "YYYY-MM",
        },
        initialValue: dayjs("2021-08", "YYYY-MM"),
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

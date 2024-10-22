import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "WeekPicker",
        label: "WeekPicker",
        component: "WeekPicker",
        componentProps: {
          valueFormat: "YYYY-MM-DD HH:mm:ss",
        },
        initialValue: dayjs("2021-08-01", "YYYY-MM-DD"), // 2021-08-01是21年第32周
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

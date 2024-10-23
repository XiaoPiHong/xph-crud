import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import dayjs from "dayjs";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        componentProps: {},
        initialValue: "Input",
      },
      {
        name: "Select",
        label: "Select",
        component: "Select",
        componentProps: {
          allowClear: true,
          placeholder: "Select",
          options: [
            { label: "测试", value: "1" },
            { label: "测试2", value: "2" },
          ],
        },
        initialValue: "1",
      },
      {
        name: "Switch",
        label: "Switch",
        component: "Switch",
        componentProps: {},
        initialValue: true,
        /** 定义子节点的值的属性，如 Switch、Checkbox 的是 checked */
        valuePropName: "checked",
      },
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

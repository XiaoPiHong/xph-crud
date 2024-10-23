import React, { useState } from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import { Radio, Divider } from "antd";

const ReactApp: React.FC = () => {
  const [size, setSize] = useState<"small" | "middle" | "large">("small");

  const props: IXphFormProps = {
    colProps: { span: 11, offset: 1 },
    labelCol: { style: { width: "100px" } },
    labelAlign: "right",
    size,
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        componentProps: {},
      },
      {
        name: "Select",
        label: "Select",
        component: "Select",
        componentProps: {
          options: [
            { label: "测试", value: "1" },
            { label: "测试2", value: "2" },
          ],
        },
      },
      {
        name: "InputNumber",
        label: "InputNumber",
        component: "InputNumber",
        componentProps: {},
      },
    ],
  };

  const onChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        options={[
          {
            label: "Small",
            value: "small",
          },
          {
            label: "Middle",
            value: "middle",
          },
          {
            label: "Large",
            value: "large",
          },
        ]}
        onChange={onChange}
        value={size}
        optionType="button"
      />
      <Divider />
      <XphForm {...props}></XphForm>
    </div>
  );
};

export default ReactApp;

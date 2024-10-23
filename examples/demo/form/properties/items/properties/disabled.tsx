import React, { useState } from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import { Radio, Divider } from "antd";

const ReactApp: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const props: IXphFormProps = {
    colProps: { span: 11, offset: 1 },
    labelCol: { style: { width: "100px" } },
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        componentProps: {
          placeholder: "Input有值时禁用Select",
        },
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
        disabled: ({ model }) => {
          return disabled || model.Input;
        },
      },
      {
        name: "InputNumber",
        label: "InputNumber",
        component: "InputNumber",
        componentProps: {
          placeholder: "禁用",
        },
        disabled: true,
      },
    ],
  };

  const onChange = (e) => {
    setDisabled(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        options={[
          {
            label: "禁用Select",
            value: true,
          },
          {
            label: "不禁用Select",
            value: false,
          },
        ]}
        onChange={onChange}
        value={disabled}
        optionType="button"
      />
      <Divider />
      <XphForm {...props}></XphForm>
    </div>
  );
};

export default ReactApp;

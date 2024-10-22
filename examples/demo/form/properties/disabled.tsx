import React, { useState } from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import { Radio, Divider } from "antd";

const ReactApp: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const props: IXphFormProps = {
    colProps: { span: 4, offset: 1 },
    disabled,
    items: [
      {
        name: "Input1",
        label: "Input1",
        component: "Input",
        componentProps: {},
      },
      {
        name: "InputNumber",
        label: "InputNumber",
        component: "InputNumber",
        componentProps: {
          onBlur: (e) => {
            console.log(e);
          },
          onChange: (e) => {
            console.log(e);
          },
        },
        initialValue: 2,
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
            label: "禁用",
            value: true,
          },
          {
            label: "不禁用",
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

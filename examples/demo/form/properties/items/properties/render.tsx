import React from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import { InputNumber } from "antd";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    items: [
      {
        name: "render",
        label: "render",
        render: ({ model, disabled, name, methods, componentProps }) => (
          <div>
            <InputNumber
              disabled={disabled}
              value={model[name]}
              onChange={(e) => methods.setFieldsValue({ [name]: e })}
              {...componentProps}
            />
            <span style={{ marginLeft: 8, fontWeight: "bold", color: "red" }}>
              {model[name]}
            </span>
          </div>
        ),
        componentProps: {
          placeholder: "render",
        },
        initialValue: 2,
        rules: [
          {
            required: true,
            message: "render必填",
          },
        ],
      },
    ],
  };

  return <XphForm {...props}></XphForm>;
};

export default ReactApp;

import React, { useState } from "react";
import { XphForm, IXphFormProps } from "xph-crud";
import { Radio, Divider } from "antd";

const ReactApp: React.FC = () => {
  const [forceRow, setForceRow] = useState<boolean>(false);

  const props: IXphFormProps = {
    colProps: { span: 11, offset: 1 },
    labelCol: { style: { width: "100px" } },
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
          allowClear: true,
          placeholder: "Select",
          options: [
            { label: "测试", value: "1" },
            { label: "测试2", value: "2" },
          ],
        },
        forceRow,
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
    setForceRow(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        options={[
          {
            label: "Select换行",
            value: true,
          },
          {
            label: "Select不换行",
            value: false,
          },
        ]}
        onChange={onChange}
        value={forceRow}
        optionType="button"
      />
      <Divider />
      <XphForm {...props}></XphForm>
    </div>
  );
};

export default ReactApp;

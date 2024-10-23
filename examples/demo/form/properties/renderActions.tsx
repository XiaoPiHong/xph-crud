import React from "react";
import { XphForm, IXphFormProps, useXphForm } from "xph-crud";
import { Flex, Button } from "antd";

const ReactApp: React.FC = () => {
  const props: IXphFormProps = {
    colProps: { span: 11, offset: 1 },
    labelCol: { style: { width: "100px" } },
    labelAlign: "right",
    items: [
      {
        name: "Input",
        label: "Input",
        component: "Input",
        required: true,
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
    renderActions: () => {
      return (
        <div style={{ width: "100%" }}>
          <Flex gap={"small"} justify={"flex-end"}>
            <Button
              type="primary"
              onClick={() => console.log(getFieldsValue())}
            >
              查询
            </Button>
            <Button onClick={() => resetFields()}>重置</Button>
          </Flex>
        </div>
      );
    },
  };

  const [register, { getFieldsValue, resetFields }] = useXphForm();

  return <XphForm register={register} {...props}></XphForm>;
};

export default ReactApp;

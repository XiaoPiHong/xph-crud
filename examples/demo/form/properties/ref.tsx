import React from "react";
import { XphForm, IXphFormProps, IXphFormActionType } from "xph-crud";
import { Divider, Flex, Button } from "antd";

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
  };

  const reactFormRef = React.useRef<IXphFormActionType>(null);

  return (
    <div>
      <Flex gap={"small"}>
        <Button
          onClick={() =>
            reactFormRef.current?.setFieldsValue({
              Input: "Input",
              Select: "1",
              InputNumber: 0,
            })
          }
        >
          设置值
        </Button>
        <Button
          onClick={() => console.log(reactFormRef.current?.getFieldsValue())}
        >
          获取值
        </Button>
        <Button onClick={() => reactFormRef.current?.validator()}>校验</Button>
        <Button onClick={() => reactFormRef.current?.resetFields()}>
          重置
        </Button>
      </Flex>
      <Divider />
      <XphForm ref={reactFormRef} {...props}></XphForm>
    </div>
  );
};

export default ReactApp;

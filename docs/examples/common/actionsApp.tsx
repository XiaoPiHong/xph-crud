import React from "react";
import { Card } from "antd";
import { XphActions, IXphActionsProps } from "xph-crud";
import "xph-crud/dist/style.css";
import "antd/dist/reset.css";

const ReactApp: React.FC = () => {
  const props: IXphActionsProps = {
    type: "dashed",
    max: 1,
    items: [
      {
        key: "add",
        component: "Button",
        componentProps: {
          children: "我是按钮",
          onClick: (e) => {
            console.log(e);
          },
        },
      },
      {
        key: "more",
        component: "Dropdown",
        componentProps: {
          children: "我是下拉",
          dropDownItems: [
            {
              key: "1",
              label: "我是下拉1",
            },
            {
              key: "2",
              label: "我是下拉2",
            },
          ],
          onClick: (e) => {
            console.log(e);
          },
        },
      },
      {
        key: "render",
        render: <div>我是自定义render</div>,
      },
    ],
  };

  return (
    <Card title="XphActions组件">
      <div style={{ display: "flex", gap: "8px" }}>
        <XphActions {...props} />
      </div>
    </Card>
  );
};

export default ReactApp;

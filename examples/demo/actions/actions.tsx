import React from "react";
import { XphActions, IXphActionsProps } from "xph-crud";

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
        ifShow: true,
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
              ifShow: true,
            },
            {
              key: "2",
              label: "我是下拉2",
              ifShow: true,
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
        ifShow: true,
      },
    ],
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <XphActions {...props} />
    </div>
  );
};

export default ReactApp;

import React from "react";
import { XphActions, XphExtendCompPropsProvider } from "xph-crud";

/**
 * 自定义操作组内容的属性
 * */
interface IMyButtonProps {
  children: string;
  onClick?: (e: any) => void;
}

/**
 * 自定义操作组内容组件
 */
const MyButton = ({
  componentProps,
  component,
}: {
  componentProps: IMyButtonProps;
  component: "MyButton";
}) => {
  console.log(component);
  const { children, onClick } = componentProps;
  return <button onClick={onClick}>{children}</button>;
};

/**
 * 操作组映射对象
 */
const myActionsComponentMap = {
  MyButton,
};

const ReactApp: React.FC = () => {
  const props: any = {
    type: "dashed",
    max: 1,
    items: [
      {
        component: "MyButton",
        componentProps: {
          // 此处的属性都会传递给myButtonProps
          children: "我是自定义的按钮",
          onClick: (e) => {
            console.log(e);
          },
        },
      },
    ],
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <XphExtendCompPropsProvider
        value={{ extendComp: { actions: myActionsComponentMap } }}
      >
        <XphActions {...props} />
      </XphExtendCompPropsProvider>
    </div>
  );
};

export default ReactApp;

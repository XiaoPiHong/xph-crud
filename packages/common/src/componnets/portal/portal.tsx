import React from "react";
import ReactDOM from "react-dom";

const Portal = ({
  children,
  to,
}: {
  children: React.ReactElement;
  to: HTMLElement;
}) => {
  // 选择你要渲染的DOM节点
  const portalRoot = to;
  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;

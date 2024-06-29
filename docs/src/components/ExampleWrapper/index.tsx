import React from "react";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { StyleProvider } from "@ant-design/cssinjs";
import { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

const ExampleWrapper = ({ Comp }: any) => {
  const divDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divDom.current) {
      // 创建 Shadow DOM
      const shadowRoot = divDom.current.attachShadow({ mode: "open" });
      const container = document.createElement("div");
      shadowRoot.appendChild(container);
      const root = createRoot(container);

      // 渲染组件到 Shadow DOM 中
      root.render(
        <ErrorBoundary>
          <StyleProvider container={shadowRoot}>
            <Comp />
          </StyleProvider>
        </ErrorBoundary>
      );
    }
  }, [Comp]);

  return (
    <div
      ref={divDom}
      style={{
        width: "100%",
        overflow: "auto",
        borderRadius: "4px",
        border: "2px solid #f2f2f2",
        padding: "16px",
      }}
    ></div>
  );
};

export default ExampleWrapper;

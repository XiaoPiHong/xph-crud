import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { StyleProvider } from "@ant-design/cssinjs";

const IframeWrapper = ({ Comp }: { Comp: React.ComponentType }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document;
      if (iframeDoc) {
        // 创建一个根元素容器
        const container = iframeDoc.createElement("div");
        iframeDoc.body.appendChild(container);

        // 创建根节点
        const root = createRoot(container);

        // 将 Ant Design 的样式链接添加到 iframe 中
        const link = iframeDoc.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.2/antd.min.css"; // 替换为 Ant Design 样式表的路径
        iframeDoc.head.appendChild(link);

        // 渲染组件到 iframe 中
        root.render(
          <ErrorBoundary>
            <StyleProvider container={iframeDoc.head}>
              <Comp />
            </StyleProvider>
          </ErrorBoundary>
        );
      }
    }
  }, [Comp]);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        height: "500px",
        border: "none",
      }}
    ></iframe>
  );
};

export default IframeWrapper;

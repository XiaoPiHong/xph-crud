import ErrorBoundary from "@docusaurus/ErrorBoundary";
import React from "react";
import CodeBlock from "@site/src/theme/CodeBlock";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import { ExpandOutlined } from "@ant-design/icons";

const ExpandDemoWrapper: React.FC<any> = ({
  children,
  height = "unset",
  rawStr,
}) => {
  const [showCode, setShowCode] = useState(false);
  const onClickShowCodeBtn = () => {
    setShowCode(!showCode);
  };
  return (
    <ErrorBoundary
      fallback={({ error, tryAgain }) => {
        console.log(error);
        return (
          <div>
            <p>This component crashed because of error: {error.message}.</p>
            <button onClick={tryAgain}>Try Again!</button>
          </div>
        );
      }}
    >
      <div
        style={{
          padding: 8,
          border: "1px solid #f0f0f0",
          borderRadius: 3,
        }}
      >
        <pre>
          <div className={"demo-wrapper"} style={{ height: height }}>
            {children}
          </div>
        </pre>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            margin: "8px 0",
          }}
        >
          <Tooltip title={showCode ? "收起代码" : "展开代码"}>
            <Button
              shape="circle"
              onClick={onClickShowCodeBtn}
              icon={<ExpandOutlined />}
            />
          </Tooltip>
        </div>
        <div style={{ display: showCode ? "block" : "none" }}>
          <CodeBlock language={"tsx"}>{rawStr}</CodeBlock>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ExpandDemoWrapper;

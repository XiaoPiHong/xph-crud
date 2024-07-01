import ErrorBoundary from "@docusaurus/ErrorBoundary";
import React from "react";
import root from "react-shadow";
import styles from "!raw-loader!/node_modules/antd/dist/reset.css";

const DemoWrapper: React.FC<any> = ({ children }) => {
  console.log(styles);
  return (
    <root.div className="quote">
      <style type="text/css">{styles}</style>
      {children}
    </root.div>
  );
};

export default DemoWrapper;

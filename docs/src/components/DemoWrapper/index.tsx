// import ErrorBoundary from "@docusaurus/ErrorBoundary";
import React from "react";
// import styles from "!raw-loader!/node_modules/antd/dist/reset.css";

const DemoWrapper: React.FC<any> = ({ children }) => {
  // console.log(styles);
  return <div className={"demo-wrapper"}>{children}</div>;
};

export default DemoWrapper;

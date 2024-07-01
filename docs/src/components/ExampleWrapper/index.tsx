import ErrorBoundary from "@docusaurus/ErrorBoundary";
import React, { useRef } from "react";

const DemoWrapper: React.FC<any> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);

  return <div ref={divRef}>{children}</div>;
};

export default DemoWrapper;

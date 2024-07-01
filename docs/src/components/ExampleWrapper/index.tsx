import React from "react";
import ErrorBoundary from "@docusaurus/ErrorBoundary";

const IframeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default IframeWrapper;

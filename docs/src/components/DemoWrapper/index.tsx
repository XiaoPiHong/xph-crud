import ErrorBoundary from "@docusaurus/ErrorBoundary";
import React from "react";

const DemoWrapper: React.FC<any> = ({ children }) => {
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
      <div className={"demo-wrapper"}>{children}</div>
    </ErrorBoundary>
  );
};

export default DemoWrapper;

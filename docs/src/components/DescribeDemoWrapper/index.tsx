import React from "react";
import { Divider } from "antd";

const DescribeDemoWrapper: React.FC<any> = ({ children, title }) => {
  return (
    <>
      <Divider orientation="left">{title || "tips"}</Divider>
      {children}
    </>
  );
};

export default DescribeDemoWrapper;

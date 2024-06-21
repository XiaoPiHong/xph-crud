import React from "react";
import ReactDOM from "react-dom/client";
import FormApp from "./FormApp";
import TableApp from "./TableApp";
import ActionsApp from "./ActionsApp";
import Test from "./Test";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "orange",
        colorLink: "orange",
      },
    }}
  >
    <ActionsApp />
    {/* <FormApp /> */}
    {/* <TableApp /> */}
    {/* <Test /> */}
  </ConfigProvider>
  // </React.StrictMode>
);

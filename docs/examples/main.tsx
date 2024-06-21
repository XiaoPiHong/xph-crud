import React from "react";
import ReactDOM from "react-dom/client";
import FormApp from "./form/formApp";
import TableApp from "./table/tableApp";
import ActionsApp from "./common/actionsApp";
import Test from "./test";
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
    {/* <ActionsApp /> */}
    {/* <FormApp /> */}
    <TableApp />
    {/* <Test /> */}
  </ConfigProvider>
  // </React.StrictMode>
);

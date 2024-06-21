import React from "react";
import ReactDOM from "react-dom/client";
import FormApp from "./FormApp.jsx";
import TableApp from "./TableApp.jsx";
import Test from "./Test.jsx";
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
    <FormApp />
    {/* <TableApp /> */}
    {/* <Test /> */}
  </ConfigProvider>
  // </React.StrictMode>
);

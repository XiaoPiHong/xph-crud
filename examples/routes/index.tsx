import { Navigate } from "react-router-dom";
import { Form, Table, Actions, Dialog } from "../demo";

const routes = [
  { path: "/form", element: <Form /> },
  { path: "/table", element: <Table /> },
  { path: "/actions", element: <Actions /> },
  { path: "/dialog", element: <Dialog /> },
  { path: "/", element: <Navigate to="/form" /> },
];
export default routes;

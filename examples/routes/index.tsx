import { Navigate } from "react-router-dom";
import { Form, Table, Actions } from "../demo";

const routes = [
  { path: "/form", element: <Form /> },
  { path: "/table", element: <Table /> },
  { path: "/Actions", element: <Actions /> },
  { path: "/", element: <Navigate to="/form" /> },
];
export default routes;

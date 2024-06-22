import { Navigate } from "react-router-dom";
import Form from "../components/form/form";
import Table from "../components/table/table";
import Actions from "../components/common/actions";
const routes = [
  { path: "/form", element: <Form /> },
  { path: "/table", element: <Table /> },
  { path: "/Actions", element: <Actions /> },
  { path: "/", element: <Navigate to="/form" /> },
];
export default routes;

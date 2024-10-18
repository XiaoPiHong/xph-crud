import { Navigate } from "react-router-dom";
import {
  FormDemos,
  TableDemos,
  ActionsDemos,
  DialogDemos,
  AuthDemos,
} from "../demo";

const routes = [
  { path: "/form", element: <FormDemos.Base /> },
  { path: "/table", element: <TableDemos.Base /> },
  { path: "/actions", element: <ActionsDemos.Base /> },
  { path: "/auth", element: <AuthDemos.Base /> },
  { path: "/dialog", element: <DialogDemos.Base /> },
  { path: "/", element: <Navigate to="/form" /> },
];
export default routes;

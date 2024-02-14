import { createBrowserRouter } from "react-router-dom";
import Counter from "./Counter";
import App from "./App";
import TableComponent from "./TableComponent";
import UserForm from "./UserForm";

export const router = createBrowserRouter([
    {
      path: "/form",
      Component: UserForm 
    },
    {
      path: "/counter",
      Component: Counter 
    },
    {
      path: "/table",
      Component: TableComponent 
    },
    {
      path: "/",
      Component: App 
    }
]);
  
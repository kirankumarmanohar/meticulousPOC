import { createBrowserRouter } from "react-router-dom";
import Counter from "./Counter";
import App from "./App";
import TableComponent from "./TableComponent";

export const router = createBrowserRouter([
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
  
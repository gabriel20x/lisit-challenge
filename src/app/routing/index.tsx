import {createBrowserRouter} from "react-router-dom";
import Landing from "../screens/Landing";
import Category from "../screens/Category";
import CategoryItemDetail from "../screens/CategoryItemDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: ":category",
        element: <Category />,
      },
      {
        path: ":category/:id",
        element: <CategoryItemDetail />,
      },
    ]
  },
]);
import {createBrowserRouter} from "react-router-dom";
import Landing from "../screens/Landing";
import Category from "../screens/Category";

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
        element: <Landing />,
      },
    ]
  },
]);
import {createBrowserRouter} from "react-router-dom";
import Landing from "../screens/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/planets",
    element: <Landing />,
  },
  {
    path: "/planets/:id",
    element: <Landing />,
  },
  {
    path: "/characters",
    element: <Landing />,
  },
  {
    path: "/characters/:id",
    element: <Landing />,
  },
  {
    path: "/ships",
    element: <Landing />,
  },
  {
    path: "/ships/:id",
    element: <Landing />,
  },
]);
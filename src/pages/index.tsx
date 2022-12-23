import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Customers = lazy(() => import("./Customers"));

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
]);

export { RootRouter as default };

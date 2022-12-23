import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./Home"));

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export { RootRouter as default };

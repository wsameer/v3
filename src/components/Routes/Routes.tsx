import PageLayout from "@components/layout/PageLayout";
import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutePaths from "./types";
import { About } from "@components/About/About";
import { SideBox } from "@components/SideBox/SideBox";
import Home from "@pages/Home";

const Root: React.FC = () => {
  return (
    <PageLayout>
      <SideBox />
      <Outlet />
    </PageLayout>
  );
};

const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Root />,
    errorElement: (
      <div>
        <h1>Error page!</h1>
      </div>
    ),
    children: [
      {
        path: RoutePaths.HOME,
        element: <Home />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return (
    <div id="app-router">
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;

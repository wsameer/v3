import PageLayout from "@components/layout/PageLayout";
import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutePaths from "./types";
import { SideBox } from "@components/SideBox/SideBox";
import Home from "@pages/Home";
import Nav from "@components/layout/Nav";
import { Footer } from "@components/Footer/Footer";

const Root: React.FC = () => (
  <PageLayout>
    <SideBox />
    <Outlet />
  </PageLayout>
);

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
    <main id="app-router">
      <RouterProvider router={router} />
    </main>
  );
};

export default Routes;

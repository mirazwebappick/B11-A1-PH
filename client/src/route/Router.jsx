import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ExploreGarden from "../pages/ExploreGarden";
import BrowseTips from "../pages/BrowseTips ";
import MyTips from "../pages/MyTips";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/explore-garden",
        Component: ExploreGarden,
      },
      {
        path: "/browse-tips",
        Component: BrowseTips,
      },
      {
        path: "/share-garden-tip",
      },
      {
        path: "/my-tips",
        Component: MyTips,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

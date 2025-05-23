import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ExploreGarden from "../pages/ExploreGarden";
import BrowseTips from "../pages/BrowseTips ";
import MyTips from "../pages/MyTips";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ShareGardenTip from "../pages/ShareGardenTip";
import TipDetails from "../pages/TipDetails";
import PrivateRouter from "../Private/PrivateRouter";
import UpdateTip from "../pages/UpdateTip";
import Error from "../pages/Error";

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
        loader: () => fetch("http://localhost:3000/gardeners"),
      },
      {
        path: "/browse-tips",
        loader: () => fetch("http://localhost:3000/share_garden_tip/public"),
        Component: BrowseTips,
      },
      {
        path: "/share-garden-tip",
        element: (
          <PrivateRouter>
            <ShareGardenTip />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-tips/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my-tips/${params.email}`),
        element: (
          <PrivateRouter>
            <MyTips />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/tip_details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/share_garden_tip/public/${params.id}`),
        element: (
          <PrivateRouter>
            <TipDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/update_tip/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my_tips/${params.id}`),
        Component: UpdateTip,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import AppLayout from "layout/appLayout/AppLayout.layout";

// config
import { DEFAULT_PATH } from "config";

import Loader from "components/loader/Loader.component";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          element: <Navigate to={DEFAULT_PATH} replace />,
          index: true,
        },
        { path: "dashboard", element: <Dashboard /> },

        { path: "*", element: <Page404 /> },
      ],
    },
  ]);
}

const Dashboard = Loadable(
  lazy(() => import("screens/dashboard/Dashboard.screen"))
);

const Page404 = Loadable(lazy(() => import("screens/Page404/Page404.page")));

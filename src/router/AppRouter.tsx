import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import { routerData } from "./routerData";
import {
  Dashboard,
  Enroll,
  Home,
  ManageCourses,
  ManageStudents,
  ManageTrainers,
  ManageWebsites,
  Notifications,
} from "@/_root";
import Auth from "@/_auth/Auth";
import { SignIn } from "@/_auth";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routerData.dashboard.path,
        element: <Dashboard />,
        children: [
          {
            path: routerData.dashboard.home,
            element: <Home />,
          },
          {
            path: routerData.dashboard.manageCourses,
            element: <ManageCourses />,
          },
          {
            path: routerData.dashboard.manageStudents,
            element: <ManageStudents />,
          },
          {
            path: routerData.dashboard.enroll,
            element: <Enroll />,
          },
          {
            path: routerData.dashboard.manageTrainers,
            element: <ManageTrainers />,
          },
          {
            path: routerData.dashboard.manageTrainers,
            element: <ManageTrainers />,
          },
          {
            path: routerData.dashboard.manageWebsites,
            element: <ManageWebsites />,
          },
          {
            path: routerData.dashboard.notifications,
            element: <Notifications />,
          },
        ],
      },
    ],
  },
  {
    path: routerData.auth.path,
    element: <Auth />,
    children: [
      {
        path: routerData.auth.login,
        element: <SignIn />,
      },
    ],
  },
]);

export default AppRouter;

import { createBrowserRouter, redirect } from "react-router-dom";

import LoginPage from "../views/LoginPage";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([
  authRoutes,
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        throw redirect("/");
      }

      return null;
    },
  },
]);

export default router;

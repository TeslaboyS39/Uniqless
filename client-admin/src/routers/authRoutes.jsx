import { redirect } from "react-router-dom";

import Home from "../views/Home";
import AboutPage from "../views/AboutPage";
import AddProduct from "../views/AddProductPage";
import DetailProduct from "../views/DetailProductPage";
import Dashboard from "../views/DashboardPage";
import EditProduct from "../views/EditProductPage";
import Categories from "../views/CategoriesPage";
import AddCategory from "../views/AddCategoryPage";
import RegisterAdmin from "../views/RegisterAdminPage";
import Layout from "../components/Layout";

const authRoutes = {
  element: <Layout />,
  loader: () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw redirect("/login");
    }

    return null;
  },
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/add-collection",
      element: <AddProduct />,
    },
    {
      path: "/detail-product/:productId",
      element: <DetailProduct />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      // not yet
      path: "/edit-product/:productId",
      element: <EditProduct />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/add-category",
      element: <AddCategory />,
    },
    {
      path: "/register-admin",
      element: <RegisterAdmin />,
    },
  ],
};

export default authRoutes;

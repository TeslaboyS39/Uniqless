import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../views/LandingPage";
import ProductsPage from "../views/ProductsPage";
import ProductDetailPage from "../views/ProductDetailPage";
import AboutPage from "../views/AboutPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/detail-product/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;

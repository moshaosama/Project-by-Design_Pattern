import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorElement from "../Layout/ErrorElement";
import MainLayout from "../Layout/MainLayout";
import Content from "../Pages/Content";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CommentPage from "../Pages/CommentPage";

const RouterPages = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorElement />,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Content />,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
        {
          path: "carts",
          element: <CartPage />,
        },
        {
          path: "comments",
          element: <CommentPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router}></RouterProvider>;
};

export default RouterPages;

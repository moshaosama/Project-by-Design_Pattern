import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorElement from "../Layout/ErrorElement";
import MainLayout from "../Layout/MainLayout";
import Content from "../Pages/Content";
import ProductPage from "../Pages/ProductPage";

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
      ],
    },
  ]);

  return <RouterProvider router={Router}></RouterProvider>;
};

export default RouterPages;

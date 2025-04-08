import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SwearContent from "../Components/SwearContent";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SwearContent>
        <Sidebar />
        <Outlet />
      </SwearContent>
      <Footer />
    </>
  );
};

export default MainLayout;

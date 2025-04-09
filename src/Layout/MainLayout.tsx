import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SwearContent from "../Components/SwearContent";
import WithTheme from "../Utils/WithTheme";

const ThemedHeader = WithTheme(Header);
const ThemedFooter = WithTheme(Footer);
const ThemedSideBar = WithTheme(Sidebar);

const MainLayout = () => {
  return (
    <>
      <ThemedHeader />
      <SwearContent>
        <ThemedSideBar />
        <Outlet />
      </SwearContent>
      <ThemedFooter />
    </>
  );
};

export default MainLayout;

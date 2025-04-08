import Content from "../Components/Content";
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
        <Content />
      </SwearContent>
      <Footer />
    </>
  );
};

export default MainLayout;

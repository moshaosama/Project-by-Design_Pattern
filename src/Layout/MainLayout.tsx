import Content from "../Components/Content";
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
    </>
  );
};

export default MainLayout;

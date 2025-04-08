import ProductsInfo from "../Components/ProductsInfo";
import AllProductLoader from "../Components/Shared/AllProductLoader";

const Content = () => {
  return (
    <div>
      <AllProductLoader resourceName="product">
        <ProductsInfo />
      </AllProductLoader>
    </div>
  );
};

export default Content;

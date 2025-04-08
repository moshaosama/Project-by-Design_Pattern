import ProductIInfo from "./ProductIInfo";
import DataLoader from "./Shared/DataLoader";

const Content = () => {
  return (
    <div>
      <DataLoader resourceName="product">
        <ProductIInfo />
      </DataLoader>
    </div>
  );
};

export default Content;

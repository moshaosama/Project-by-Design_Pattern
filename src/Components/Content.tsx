import ProductbyidInfo from "./ProductbyidInfo";

import ProductByIdLoader from "./Shared/ProductByIdLoader";

const Content = () => {
  return (
    <div>
      <ProductByIdLoader productId={1} resourceName="product">
        <ProductbyidInfo />
      </ProductByIdLoader>
    </div>
  );
};

export default Content;

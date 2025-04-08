import ProductByIdLoader from "../Components/Shared/ProductByIdLoader";
import ProductbyidInfo from "../Components/ProductbyidInfo";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <ProductByIdLoader resourceName="product" productId={id as any}>
      <ProductbyidInfo />
    </ProductByIdLoader>
  );
};

export default ProductPage;

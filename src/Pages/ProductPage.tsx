import ProductByIdLoader from "../Components/Shared/ProductByIdLoader";
import ProductbyidInfo from "../Components/ProductbyidInfo";
import { useParams } from "react-router";
import useLoading from "../Hooks/useLoading";
import WithLoading from "../Utils/WithLoading";

const WrapperComponent = WithLoading(ProductbyidInfo);

const ProductPage = () => {
  const { loading } = useLoading();
  const { id } = useParams();
  return (
    <ProductByIdLoader resourceName="product" productId={id as any}>
      <WrapperComponent loading={loading} />
    </ProductByIdLoader>
  );
};

export default ProductPage;

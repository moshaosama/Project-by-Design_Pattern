import ProductsInfo from "../Components/ProductsInfo";
import AllProductLoader from "../Components/Shared/AllProductLoader";
import WithLoading from "../Utils/WithLoading";
import useLoading from "../Hooks/useLoading";

const WrappedComponent = WithLoading(ProductsInfo);

const Content = () => {
  const { loading } = useLoading();
  return (
    <div>
      <AllProductLoader resourceName="product">
        <WrappedComponent loading={loading} />
      </AllProductLoader>
    </div>
  );
};

export default Content;

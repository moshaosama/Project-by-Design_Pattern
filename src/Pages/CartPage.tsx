import CartsInfo from "../Components/DataInfo/CartsInfo";
import AllCartsLoader from "../Components/Shared/AllCartsLoader";
import useLoading from "../Hooks/useLoading";
import WithLoading from "../Utils/WithLoading";

const CartsInfoLoader = WithLoading(CartsInfo);
const CartPage = () => {
  const { loading } = useLoading();
  return (
    <AllCartsLoader resourceName="carts">
      <CartsInfoLoader loading={loading} />
    </AllCartsLoader>
  );
};

export default CartPage;

import { Link } from "react-router";

interface CartsInfoProps {
  carts?: {
    date: string;
    products: {
      productId: number;
      quantity: number;
    }[];
  }[];
}

const CartsInfo = ({ carts }: CartsInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-4 overflow-y-scroll h-[86.8vh]">
        {carts?.map((cart) => {
          return cart.products?.map((product, i) => {
            return (
              <div
                className="bg-[#ddd] flex justify-between p-5 rounded-xl shadow-lg w-[107pc]"
                key={i}
              >
                <div>
                  <h1>ProductName</h1>
                </div>
                <div>
                  <Link to={`/product/${product.productId}`}>
                    <button className="bg-teal-400 font-bold px-5 rounded-xl text-white py-2">
                      View
                    </button>
                  </Link>

                  <h1 key={i}>{cart?.date?.slice(0, 10)}</h1>
                </div>
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default CartsInfo;

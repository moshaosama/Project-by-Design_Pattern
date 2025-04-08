import { Link } from "react-router";

interface ProductDataType {
  product?: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
}

const ProductsInfo = ({ product }: ProductDataType) => {
  return (
    <>
      {product ? (
        <div className="grid grid-cols-5 max-sm:grid-cols-1 justify-between items-center overflow-y-scroll h-[86.8vh]">
          {product.map((product) => {
            return (
              <Link to={`product/${product.id}`}>
                <div
                  key={product.id}
                  className="border-[2px] m-4 max-sm:m-0 shadow-xl hover:bg-gray-200 hover:rounded-xl transition-all duration-500 cursor-pointer  h-96 border-gray-300 p-10"
                >
                  <div className="flex justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt="Image.png"
                      className="w-40 h-56 object-center hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h1 className="truncate">
                      <strong>Title: </strong>
                      {product.title}
                    </h1>
                    <h1 className="truncate">
                      <strong>Description: </strong>
                      {product.description}
                    </h1>
                    <h1>
                      <strong>Price: </strong>
                      {product.price}$
                    </h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-xl text-gray-700">Loading....</p>
      )}
    </>
  );
};

export default ProductsInfo;

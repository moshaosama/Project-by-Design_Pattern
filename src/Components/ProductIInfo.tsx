interface ProductDataType {
  product?: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
}

const ProductIInfo = ({ product }: ProductDataType) => {
  return (
    <>
      {product ? (
        product.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
            </div>
          );
        })
      ) : (
        <p className="text-xl text-gray-700">Loading....</p>
      )}
    </>
  );
};

export default ProductIInfo;

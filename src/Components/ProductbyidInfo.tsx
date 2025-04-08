interface productDataType {
  product?: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

const ProductbyidInfo = ({ product }: productDataType) => {
  return (
    <div className="flex items-center gap-5 m-10">
      <div>
        <img
          src={product?.image}
          alt="Image.png"
          loading="lazy"
          decoding="async"
          className="w-96"
        />
      </div>
      <div>
        <h1 className="text-xl">
          <strong>Title: </strong>
          {product?.title}
        </h1>
        <h1 className="text-xl">
          <strong>Description: </strong>
          {product?.description}
        </h1>
        <h1 className="text-xl">
          <strong>Price: </strong>
          {product?.price}$
        </h1>
      </div>
    </div>
  );
};

export default ProductbyidInfo;

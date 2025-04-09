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
      <div>
        {carts?.map((cart, i) => {
          return <h1 key={i}>{cart?.date}</h1>;
        })}
      </div>
    </>
  );
};

export default CartsInfo;

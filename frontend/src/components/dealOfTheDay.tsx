import dealOfTheDay from "../assets/dealRedux.png";
import { useFetchProducts } from "../lib/hooks";

function DealOfTheDay() {
  const { productList, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const dealProduct = [...productList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);

  return (
    <div>
      <div className="flex flex-row my-4 ">
        <img
          src={dealOfTheDay}
          alt="Deal of the day"
          style={{ height: "415px" }}
        />
        {dealProduct.map((product) => (
          <div
            className="inline-block my-4 max-w-fit hover:cursor-pointer"
            key={product.id}
          >
            <div className="flex justify-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "350px", height: "350px" }}
                className="absolute"
              />
              <p className="relative -bottom-1 left-1 text-lg font-bold rounded-lg bg-accent px-2 ">
                Was {product.price}$, <span>Now on sale </span>
                {product.price && typeof product.price === "number"
                  ? (product.price * 0.8).toFixed(2)
                  : "N/A"}
                $
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealOfTheDay;

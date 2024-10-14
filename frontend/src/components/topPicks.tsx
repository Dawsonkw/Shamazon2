// A selection of products for the home page. Top picks will be created at random from the products.

import { useFetchProducts } from "../lib/hooks";

function TopPicks() {
  const { productList, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const topPicks = [...productList].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4 ml-4">
        Popular Items Of The Week
      </h1>
      {topPicks.map((product) => (
        <div
          className="inline-block mx-4 max-w-fit hover:cursor-pointer"
          key={product.id}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "250px", height: "250px" }}
          />
          <div className="text-center hover:underline">
            <h2 className="text-wrap ">{product.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopPicks;

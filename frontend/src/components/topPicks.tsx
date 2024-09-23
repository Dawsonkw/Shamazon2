// A selection of products for the home page. Top picks will be created at random from the products.

import { useFetchProducts } from "../lib/hooks";

function TopPicks() {
  const { productList, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const topPicks = [...productList].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className="my-4">
      {topPicks.map((product) => (
        <div className="inline-block mx-4 max-w-fit" key={product.id}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "250px", height: "250px" }}
          />
          <div className="text-center hover:underline">
            <h2 className="text-wrap ">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopPicks;

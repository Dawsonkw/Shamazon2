// Single view for a specific item
import { useFetchProducts } from "../lib/hooks";

// A single product view for a specific item,
function Item() {
  const { productList, loading, error } = useFetchProducts();

  // Right now were going to just trim the first item from the list to style the component then well figure out logic on how we want to get the items later.
  const product = productList[0];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="container mx-auto px-4 py-8 border border-black mt-[120px]">
      <h1>Item</h1>

      <div className="flex flex-col">
        <div className="flex justify-between flex-row">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
        <div className="flex justify-between flex-row">
          <p>{product.brand}</p>
          <p
            className={`${
              product.inStock ? "bg-green-500" : "bg-red-500"
            } py-2 px-4 text-white rounded`}
          >
            {product.inStock ? "In Stock" : "Out Of Stock"}
          </p>
        </div>
      </div>

      <div>
        <img
          className="mt-8"
          src={product.imageUrl}
          style={{ maxWidth: "50vw" }}
          alt={product.name}
        />
        <p>{product.description}</p>
      </div>
    </main>
  );
}

export default Item;

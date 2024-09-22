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
      <div className="flex flex-col gap-4">
        <div className="flex justify-between flex-row">
          <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
            {product.name}
          </h1>
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

      <div className="grid grid-cols-2 gap-8 ">
        <div className="">
          <img
            className="mt-8"
            src={product.imageUrl}
            style={{ width: "1000px", maxWidth: "100%" }}
            alt={product.name}
          />
        </div>
        <div className="mt-8 mx-auto ">
          <p>{product.description}</p>
          <ul className="list-disc list-inside">
            {Object.keys(product.specs).map((specKey, index) => (
              <li key={index} className="capitalize">
                {specKey}: {product.specs[specKey]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Item;

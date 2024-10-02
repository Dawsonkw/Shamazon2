// Single view for a specific item
import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../lib/hooks";

//  AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
// typescript is not making me happy

// A single product view for a specific item,
function Item() {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useFetchSingleProduct(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8 border border-black mt-[120px]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between flex-row">
          <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
            {product.name}
          </h1>
          <p className="text-3xl font-bold tracking-tight lg:text-6xl mb-4">
            ${product.price}
          </p>
        </div>
        <div className="flex justify-between flex-row">
          <p className="text-xl font-bold  ">{product?.brand}</p>
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
          <p className="text-xl">{product?.description}</p>
          {product.specs && (
            <ul className="text-lg list-disc list-inside mt-8">
              <div className="font-bold underline text-lg">Specifications:</div>
              {Object.entries(product.specs).map(
                ([specKey, specValue], index) => (
                  <li key={index} className="capitalize">
                    {specKey}: {String(specValue)}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Item;

import { useEffect, useState } from "react";
import { ProductApiResponse } from "../lib/types";
import handleFetchProduct from "../lib/hooks";

// List view for all items
function Items() {
  const [productList, setProductList] = useState<ProductApiResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // This useEffect hook is going to also be extracted into its own component
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await handleFetchProduct();
        if (data) {
          setProductList(data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;

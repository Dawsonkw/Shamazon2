import { useEffect, useState } from "react";
import fetchProduct from "../lib/hooks";
import { ProductApiResponse } from "../lib/types";

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
        const data = await fetchProduct();
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
    <main>
      <h1>Items</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Items;

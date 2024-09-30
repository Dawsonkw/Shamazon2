// Fetch a single product
import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants";
import { ProductApiResponse } from "./types";

//////Handlers /////////////////
// Calls the API to fetch products
export const handleFetchProduct = async (): Promise<
  ProductApiResponse[] | null
> => {
  try {
    const response = await fetch(`${BASE_API_URL}/products`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a single product
export const handleFetchSingleProduct = async (
  id: number
): Promise<ProductApiResponse> => {
  try {
    const response = await fetch(`${BASE_API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

//////////Hooks////////////////
// Use the handleFetchProduct function to get info to display products on page
export function useFetchProducts() {
  const [productList, setProductList] = useState<ProductApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadProducts = async () => {
      try {
        const data = await handleFetchProduct();
        if (isMounted) {
          if (data) {
            setProductList(data);
          } else {
            setError("No data found");
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(
            error instanceof Error
              ? error.message
              : "An unknown error has occurred"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return { productList, loading, error };
}

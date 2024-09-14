// Fetch a single product

import { useEffect, useState } from "react";
import { BASE_API_URL } from "./constants";
import { ProductApiResponse } from "./types";

const handleFetchProduct = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/products`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API request failed: ${errorData}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default handleFetchProduct;

// Trying to extract the logic but im failing at life and now I dont know who I am anymore and just want a hug and im going to do this later
export const useFetchProduct = ({ children }) => {
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

  return { productList, isLoading, error };
};

// Fetch a list of products by category

// Fetch a list of all products

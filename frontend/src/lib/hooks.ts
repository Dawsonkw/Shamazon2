// Fetch a single product
import { BASE_API_URL } from "./constants";
import { ProductApiResponse } from "./types";

const handleFetchProduct = async (): Promise<ProductApiResponse[] | null> => {
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

export default handleFetchProduct;

// Fetch a list of products by category

// Fetch a list of all products

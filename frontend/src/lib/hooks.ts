// Fetch a single product

import { BASE_API_URL } from "./constants";

const fetchProduct = async () => {
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

export default fetchProduct;

// Fetch a list of products by category

// Fetch a list of all products

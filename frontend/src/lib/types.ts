export type PageDirection = "next" | "previous";

export type ProductApiResponse = {
  id: string | number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  inStock: boolean;
  brand: string;
  specs: Record<string, string | number | boolean>;
};

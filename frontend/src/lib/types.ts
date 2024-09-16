export type PageDirection = "next" | "previous";

export type ProductApiResponse = {
  id: string | number;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  rating: {
    rate: number;
    count: number;
  };
  inStock: boolean;
  brand: string;
  specs: Record<string, string | number | boolean>;
};

export type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

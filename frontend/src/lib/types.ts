export type PageDirection = "next" | "previous";

export type ProductApiResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: {
    rate: number;
    count: number;
  };
  inStock: boolean;
  brand: string;
  specs: Record<string, string | number | boolean>;
  category: string;
  subcategory: string;
};

export type ItemsProps = {
  selectedSubcategory: string;
  setSelectedSubcategory: (subcategory: string) => void;
  setItemsDisplayed: (display: boolean) => void;
};

export type FetchSingleProductResult = {
  product: ProductApiResponse;
  isLoading: boolean;
  error: string | null;
};

export type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

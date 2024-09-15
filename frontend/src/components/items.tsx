import { useEffect, useState } from "react";
import { ProductApiResponse } from "../lib/types";
import handleFetchProduct from "../lib/hooks";
import PaginationControls from "./paginationControls";
import { itemsPerPage } from "../lib/constants";

// List view for all items
function Items() {
  const [productList, setProductList] = useState<ProductApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // This useEffect hook is going to also be extracted into its own component
  useEffect(() => {
    const isMounted = true;

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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Pagination controls and logic

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Items;

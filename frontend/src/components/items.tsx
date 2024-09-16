import React, { useEffect, useState } from "react";
import { ProductApiResponse } from "../lib/types";
import handleFetchProduct from "../lib/hooks";
// import PaginationControls from "./paginationControls";
// import { itemsPerPage } from "../lib/constants";

function Items() {
  const [productList, setProductList] = useState<ProductApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [currentPage, setCurrentPage] = useState(1);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Pagination logic
  // const totalItems = productList.length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList;

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((product) => (
          <li
            key={product.id}
            className="flex flex-col border p-4 rounded shadow"
          >
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <p className="text-gray-600">{product.category}</p>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-gray-600 ">{product.description}</p>
            {/* <p className="text-gray-600">Rating: {product.rating.rate}</p> */}
            <div className="flex flex-row justify-between">
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">
                Stock: {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <p className="text-gray-600  ">
              <div className="font-semibold flex justify-center underline">
                Specs:
              </div>
              <ul className="list-disc list-inside">
                {Object.keys(product.specs).map((key) => (
                  <li key={key} className="capitalize">
                    {key}: {product.specs[key]}
                  </li>
                ))}
              </ul>
            </p>
          </li>
        ))}
      </ul>
      <div>
        {/* <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
}

export default Items;

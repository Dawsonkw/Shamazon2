import { useFetchProducts } from "../lib/hooks";
import { Link } from "react-router-dom";
import { ItemsProps } from "../lib/types";
// import PaginationControls from "./paginationControls";
// import { itemsPerPage } from "../lib/constants";

function Items({ selectedSubcategory }: ItemsProps): JSX.Element {
  const { productList, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // // Pagination logic
  // // const totalItems = productList.length;
  // // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // // const indexOfLastItem = currentPage * itemsPerPage;
  // // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = productList;

  // // const handlePageChange = (newPage: number) => {
  // //   setCurrentPage(newPage);
  // // };

  /// So the logic ic sound but i think im pulling wrong cause my json structure cause it just displays a blank page but I get no errors. Not solving tonight but start here tomorrow

  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-2xl font-bold mb-4">Items</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 tracking-wide leading-8 ">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="flex flex-col border p-4 rounded shadow-lg hover:bg-purple-100  transition duration-00 ease-in-out"
            >
              <Link to={`/item/${product.id}`} className="flex flex-col h-full">
                <div className="flex flex-row justify-between">
                  <h2 className="font-semibold">{product.name}</h2>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-600">{product.subcategory}</p>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover my-4 p-4"
                />
                <p className="text-gray-600 flex text-center ">
                  {product.description}
                </p>
                <div className="flex flex-row justify-between my-4">
                  <p className="text-gray-600">Brand: {product.brand}</p>
                  <p
                    className={`${
                      product.inStock ? "bg-green-500" : "bg-red-500"
                    } py-2 px-4 text-white rounded-lg`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <h2 className="text-gray-600 my-4 border border-gray-300/80 rounded-[10px] p-4">
                  <div className="font-semibold flex justify-center underline text-xl">
                    Specs :
                  </div>
                  <ul className="list-disc list-inside">
                    {Object.keys(product.specs).map((specKey, index) => (
                      <li key={index} className="capitalize">
                        {specKey}: {product.specs[specKey]}
                      </li>
                    ))}
                  </ul>
                </h2>
              </Link>
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
    </div>
  );
}

export default Items;

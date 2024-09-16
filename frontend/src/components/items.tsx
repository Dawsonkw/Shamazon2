import { useFetchProducts } from "../lib/hooks";
// import PaginationControls from "./paginationControls";
// import { itemsPerPage } from "../lib/constants";

function Items() {
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

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 tracking-wide leading-8 ">
        {productList.map((product) => (
          <li
            //use a datetime for the key
            key={product.name}
            className="flex flex-col border p-4 rounded shadow-lg hover:bg-purple-100  transition duration-00 ease-in-out"
          >
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <p className="text-gray-600">{product.category}</p>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover my-4 p-4"
            />
            <p className="text-gray-600 flex text-center ">
              {product.description}
            </p>
            {/* <p className="text-gray-600">
              Rating: {product.rating.count} {product.rating.rate}
            </p> */}
            <div className="flex flex-row justify-between my-4">
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">
                Stock: {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <h2 className="text-gray-600 my-4 ">
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
            </h2>
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

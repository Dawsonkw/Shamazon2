import dealOfTheDay from "../assets/dealRedux.png";
import { useFetchProducts } from "../lib/hooks";

function DealOfTheDay() {
  const { productList, loading, error } = useFetchProducts();

  if (loading)
    return <p className="text-center text-lg font-semibold py-8">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-600 py-8">Error: {error}</p>
    );

  const dealProduct = [...productList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px] ">
      <div className="flex flex-col md:flex-row bg-pattern-gradient rounded-lg shadow-lg h-[585px]">
        <img
          src={dealOfTheDay}
          alt="Deal of the day"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        {dealProduct.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-1/2 p-6 flex flex-col justify-between"
          >
            <div className="bg-white rounded-t-lg p-6">
              <div className="relative mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-red-600 text-white text-sm font-bold rounded-full px-3 py-1">
                  {((1 - (product.price * 0.8) / product.price) * 100).toFixed(
                    0
                  )}
                  % OFF
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <p className="text-gray-800 mb-4">{product.description}</p>
            </div>
            <div className="bg-white rounded-b-lg p-6">
              <p className="text-2xl font-bold text-red-600 mb-2">
                ${(product.price * 0.8).toFixed(2)}
                <span className="text-lg font-normal text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealOfTheDay;

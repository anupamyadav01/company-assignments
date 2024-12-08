import { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity increment and decrement
  const handleQuantity = (type) => {
    if (type === "increment") setQuantity((prev) => prev + 1);
    if (type === "decrement" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          </div>
        </div>

        {/* Product Image */}
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-40 object-contain"
        />

        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product?.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{product?.description}</p>

          {/* Gender Options */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700">
              Select Gender:
            </h3>
            <div className="flex space-x-2 mt-2">
              {product?.genderOptions.map((option, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-4">
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg"
                onClick={() => handleQuantity("decrement")}
              >
                -
              </button>
              <span className="text-gray-700">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg"
                onClick={() => handleQuantity("increment")}
              >
                +
              </button>
            </div>
            <div className="text-lg font-bold text-gray-800">
              ${product?.price}
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;

import React, { useState, useContext } from 'react';
import { OurProductContext } from '../Global/ProductsContext';

const Navbar = () => {
  const { sortProducts, addProduct } = useContext(OurProductContext);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [productImage, setProductImage] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    sortProducts(sortOrder);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setProductImage('');
    setProductTitle('');
    setProductDescription('');
    setProductPrice('');
    setProductCategory('');
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      image: productImage,
      title: productTitle,
      description: productDescription,
      price: parseFloat(productPrice),
      category: productCategory,
    };

    addProduct(newProduct);
    closePopup();
  };

  return (
    <div className="navbar bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="text-white text-3xl font-bold">
              My Store
            </a>
          </li>
        </ul>
        <div className="nav-btn flex space-x-4">
          <select
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
            onChange={handleSortChange}
          >
            <option value="lowToHigh">Sort by Price: Low to High</option>
            <option value="highToLow">Sort by Price: High to Low</option>
          </select>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={openPopup}
          >
            Add Product
          </button>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="popup fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-75">
          <div className="popup-content bg-white p-6 rounded shadow-lg">
            <label htmlFor="productImage" className="block text-gray-700 font-bold mb-2">
              Product Image URL:
            </label>
            <input
              type="text"
              id="productImage"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              className="border rounded py-2 px-3 mb-4 w-full"
            />

            <label htmlFor="productTitle" className="block text-gray-700 font-bold mb-2">
              Product Title:
            </label>
            <input
              type="text"
              id="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              className="border rounded py-2 px-3 mb-4 w-full"
            />

            <label htmlFor="productDescription" className="block text-gray-700 font-bold mb-2">
              Product Description:
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="border rounded py-2 px-3 mb-4 w-full"
            />

            <label htmlFor="productPrice" className="block text-gray-700 font-bold mb-2">
              Product Price:
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="border rounded py-2 px-3 mb-4 w-full"
            />

            <label htmlFor="productCategory" className="block text-gray-700 font-bold mb-2">
              Product Category:
            </label>
            <input
              type="text"
              id="productCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="border rounded py-2 px-3 mb-4 w-full"
            />

            <div className="flex justify-between">
              <button
                onClick={handleAddProduct}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Add Product
              </button>
              <button
                onClick={closePopup}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

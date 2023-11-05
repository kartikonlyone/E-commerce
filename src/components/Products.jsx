import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OurProductContext } from '../Global/ProductsContext';
import Banner from './Banner';


const Products = () => {
  const { products, deleteProduct } = useContext(OurProductContext);

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="container mx-auto">
      <Banner /> 
      <h1 className="text-3xl font-bold mb-6 text-center my-10">Products</h1>
      <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className={`status ${product.status === 'hot' ? 'hot' : 'new'}`}>
              {product.status}
            </div>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-center text-lg font-semibold">{product.title}</h2>
            <p className="text-center text-gray-600">{product.description}</p>
            <p className="text-center text-gray-600 my-2"><b>Category:</b> {product.category}</p>
            <h3 className="text-center text-gray-600 my-2"><b>${product.price}</b></h3>
            <div className="product-btns mt-4 w-full text-center flex justify-around">
              <Link to={`/product/${product.id}`} className="product-btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </Link>
              <button onClick={() => handleDelete(product.id)} className="product-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
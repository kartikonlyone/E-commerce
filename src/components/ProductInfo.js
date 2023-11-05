import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { OurProductContext } from '../Global/ProductsContext';

const ProductInfo = () => {
  const { id } = useParams();
  const { products } = useContext(OurProductContext);
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto my-10 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className='product-image'>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover object-center" />
        </div>
        <div className="py-4 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-2 text-gray-600"> <b>Price:</b> ${product.price}</p>
         
          <p className="mt-2 text-gray-600"> <b>Category:</b> {product.category}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

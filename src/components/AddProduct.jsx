import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    addProduct({ id: Date.now(), name, price }).then(() => {
     
      setName('');
      setPrice('');
      setIsSubmitting(false);
    });
  };

  return (
    <form className="mb-4">
      <input
        className="border rounded py-2 px-3 mr-2"
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={isSubmitting}
      />
      <input
        className="border rounded py-2 px-3 mr-2"
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        disabled={isSubmitting}
      />
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default AddProduct;

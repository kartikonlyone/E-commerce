import React, { createContext, useReducer, useEffect, useMemo } from 'react';

const OurProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload.map(product => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
      }));
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
    case 'SORT_PRODUCTS':
      if (action.payload === 'lowToHigh') {
        return [...state].sort((a, b) => a.price - b.price);
      } else if (action.payload === 'highToLow') {
        return [...state].sort((a, b) => b.price - a.price);
      }
      return state;
    case 'ADD_PRODUCT':
      return [...state, action.payload]; 
    default:
      return state;
  }
};

const ProductsContextProvider = (props) => {
  const [products, dispatch] = useReducer(productReducer, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const deleteProduct = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  };

  const sortProducts = (sortOrder) => {
    dispatch({ type: 'SORT_PRODUCTS', payload: sortOrder });
  };

  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const contextValue = useMemo(() => ({
    products,
    deleteProduct,
    sortProducts,
    addProduct,
  }), [products]);

  return (
    <OurProductContext.Provider value={contextValue}>
      {props.children}
    </OurProductContext.Provider>
  );
};

export { OurProductContext, ProductsContextProvider };

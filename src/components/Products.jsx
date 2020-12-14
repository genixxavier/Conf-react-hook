import React, { useContext } from 'react';
import Product from '../components/Product';
import '../styles/components/Products.css';

import { AppContext } from '../context/AppContext';

const Products = () => {
  const {
    state: { products },
    addToCard,
  } = useContext(AppContext);

  const handleAddToCard = (product) => () => {
    addToCard(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

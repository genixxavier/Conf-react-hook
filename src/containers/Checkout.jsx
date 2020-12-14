import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const SumTotalCart = useMemo(() => {
    return cart.reduce((acc, crr) => acc + crr.price, 0);
  }, [cart]);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <h3>Not products in the cart</h3>
        )}
        {cart.length > 0 &&
          cart.map((item) => (
            <div key={item.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>$ {item.price} </span>
              </div>
              <button type="button" onClick={() => removeFromCart(item)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: ${SumTotalCart} </h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

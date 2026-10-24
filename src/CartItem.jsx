import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getItemPrice = (item) => {
    return Number(String(item.cost).replace(/[$,]/g, '')) || 0;
  };

  const calculateTotalAmount = () => {
    return cart
      .reduce(
        (total, item) =>
          total + getItemPrice(item) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (getItemPrice(item) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();

    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-cost">{item.cost}</p>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  -
                </button>

                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>

                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <p className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </p>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <br />

        <button
          className="get-started-button1"
          disabled={cart.length === 0}
          onClick={() => alert('Checkout functionality is not implemented yet.')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;

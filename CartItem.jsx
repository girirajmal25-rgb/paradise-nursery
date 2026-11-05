
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Add some beautiful plants to your cart.</p>
          <a href="/products">Continue Shopping</a>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-details">
                  <h2>{item.name}</h2>

                  <p>
                    Price: ${Number(item.price).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>

            <a href="/products">
              Continue Shopping
            </a>

            <button
              onClick={() =>
                alert("Thank you for shopping at Paradise Nursery!")
              }
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;

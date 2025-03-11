import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaCreditCard } from "react-icons/fa";
import styles from "../styles/Cart.module.css";

export const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = total * 0.07;
  const finalTotal = total + tax;

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: item });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: item });
    }
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <Link to="/" className={styles.continueShoppingBtn}>
          <FaArrowLeft /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles.cartContainer} fade-in`}>
      <div className={styles.itemsColumn}>
        <h2>
          Your Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
        </h2>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.productDetails}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productDescription}>{item.description}</p>
                <p className={styles.productPrice}>${item.price}</p>
              </div>
            </div>

            <div className={styles.controlsGroup}>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE_QUANTITY", payload: item })
                  }
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className={styles.priceDetails}>
                <p className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item })
                  }
                  className={styles.removeButton}
                  aria-label="Remove item"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.cartActions}>
          <Link to="/" className={styles.continueShoppingBtn}>
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>

      {/* Checkout Column */}
      <div className={styles.checkoutColumn}>
        <div className={styles.checkoutSummary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>
              Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"})
            </span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Estimated Tax (7%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <button
            className={styles.checkoutButton}
            onClick={() =>
              alert("Thank you for your order! This is a demo application.")
            }
          >
            <FaCreditCard /> Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

export const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: item });
    } else {
      dispatch({ type: 'DECREASE_QUANTITY', payload: item });
    }
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsColumn}>
        <h2>Your Cart ({cart.length} items)</h2>
        {cart.map(item => (
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
                <p className={styles.productPrice}>Price: ${item.price}</p>
              </div>
            </div>

            <div className={styles.controlsGroup}>
              <div className={styles.quantityControls}>
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}>+</button>
              </div>
              <div className={styles.priceDetails}>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Column */}
      <div className={styles.checkoutColumn}>
        <div className={styles.checkoutSummary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal ({cart.length} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Estimated Tax</span>
            <span>${(total * 0.01).toFixed(2)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>${(total * 1.07).toFixed(2)}</span>
          </div>
          <button 
            className={styles.checkoutButton}
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
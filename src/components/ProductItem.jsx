import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import styles from "../styles/ProductList.module.css";

export const ProductItem = ({ product }) => {
  const { dispatch, cart } = useCart();
  const [added, setAdded] = useState(false);

  // Check if product is already in cart
  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setAdded(true);

    // Reset button text after 1 second
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className={`${styles.productCard} fade-in`}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          loading={product.id === 1 ? "eager" : "lazy"}
          fetchPriority={product.id === 1 ? "high" : "auto"}
          className={styles.productImage}
        />
      </div>

      <h3>{product.name}</h3>
      <h6>{product.description}</h6>
      <p>${product.price}</p>
      <button
        onClick={handleAddToCart}
        className={`${styles.addToCartButton} ${isInCart ? styles.inCart : ""}`}
        disabled={added}
      >
        {added ? (
          <>
            <FaCheck /> Added to Cart
          </>
        ) : isInCart ? (
          <>
            <FaShoppingCart /> Add Again
          </>
        ) : (
          <>
            <FaShoppingCart /> Add to Cart
          </>
        )}
      </button>
    </div>
  );
};

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "../styles/ProductList.module.css";

export const ProductItem = ({ product }) => {
  const { dispatch } = useCart(); // Removed 'cart' since it's not used
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setAdded(true);

    // Reset button text after 1 second
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        width="400" // Set fixed dimensions to avoid layout shift
        height="300"
        loading={product.id === 1 ? "eager" : "lazy"} // Prioritize LCP image
        fetchPriority={product.id === 1 ? "high" : "auto"}
        className={styles.productImage}
      />

      <h3>{product.name}</h3>
      <h6>{product.description}</h6>
      <p>${product.price}</p>
      <button
        onClick={handleAddToCart}
        className={styles.addToCartButton}
        disabled={added}
      >
        {added ? "Added to Cart Successfully!" : "Add to Cart"}
      </button>
    </div>
  );
};

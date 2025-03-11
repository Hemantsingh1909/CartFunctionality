import React from "react";
import { ProductList } from "../components/ProductList";
import styles from "../styles/Pages.module.css";

export const ProductsPage = () => {
  return (
    <div className={`${styles.page} fade-in`}>
      <div className={styles.pageHeader}>
        <h1>Featured Products</h1>
        <p>Discover our selection of premium electronics</p>
      </div>
      <ProductList />
    </div>
  );
};

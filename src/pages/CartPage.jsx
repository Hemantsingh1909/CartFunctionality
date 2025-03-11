import React from "react";
import { Cart } from "../components/Cart";
import styles from "../styles/Pages.module.css";

export const CartPage = () => {
  return (
    <div className={`${styles.page} fade-in`}>
      <Cart />
    </div>
  );
};

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();

  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.navRight}>
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          <FaHome />
          <span>Home</span>
        </Link>
        <Link
          to="/cart"
          className={`${styles.navLink} ${
            location.pathname === "/cart" ? styles.active : ""
          }`}
        >
          <div className={styles.cartIconWrapper}>
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className={styles.cartCount}>{totalItems}</span>
            )}
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

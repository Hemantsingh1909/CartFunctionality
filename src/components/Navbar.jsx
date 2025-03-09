import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import logo from "/assets/Logo.png";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/cart" className={styles.cartIcon}>
        <FaShoppingCart />
        <span className={styles.cartCount}>{cart.length}</span>
      </Link>
    </nav>
  );
};

export default Navbar;

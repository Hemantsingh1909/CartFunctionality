import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

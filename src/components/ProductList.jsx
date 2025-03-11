import React, { useState } from "react";
import { ProductItem } from "./ProductItem";
import { products } from "../Products";
import SearchBar from "./SearchBar";
import styles from "../styles/ProductList.module.css";

export const ProductList = () => {
  const [searchResults, setSearchResults] = useState(products);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(products);
      setNoResults(false);
      return;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredProducts);
    setNoResults(filteredProducts.length === 0);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {noResults ? (
        <div className={styles.noResults}>
          <h3>No products found</h3>
          <p>Try a different search term or browse our products below.</p>
        </div>
      ) : (
        <div className={styles.productGrid}>
          {searchResults.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

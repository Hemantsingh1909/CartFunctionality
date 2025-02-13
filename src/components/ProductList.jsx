import React from 'react';
import { ProductItem } from './ProductItem';
import { products } from '../Products';
import styles from '../styles/ProductList.module.css';

export const ProductList = () => {
  return (
    <div className={styles.productGrid}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
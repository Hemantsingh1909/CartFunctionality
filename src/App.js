import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            {/* Your Routes/Pages will render here */}
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
          <footer>
            <Footer className="footer"/>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

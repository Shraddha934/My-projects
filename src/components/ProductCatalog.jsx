import React, { useState } from "react";
//import "./prod_page.css"; // Ensure you have this CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

// Sample product data
const products = [
  { id: 0, image: "./assets/images/halkund.jpeg", title: "Halad", price: 120 },
  { id: 1, image: "./images/cotton.JPG.", title: "Cotton", price: 100 },
  { id: 2, image: "antarpat.jpeg", title: "Antarpat", price: 1000 },
  { id: 3, image: "rukhwat.jpeg", title: "Rukhwat", price: 50000 },
  { id: 4, image: "supari.jpeg", title: "Supari", price: 500 },
  { id: 5, image: "mundavlya.jpeg", title: "Mundavlya", price: 2000 },
  { id: 6, image: "kalsh.jpeg", title: "Kalsh", price: 1000 },
];

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(updatedTotal);
  };

  const handleBuyNow = () => {
    alert("Thank you for your purchase!");
    // Add further functionality to handle checkout
  };

  return (
    <div>
      <div className="header">
        <p className="logo">Logo</p>
        <div className="cart">
          <FaShoppingCart />
          <p id="count">{cart.length}</p>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: Rs {product.price}.00</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <div className="head">
            <p>My Cart</p>
          </div>
          <div id="cartItem">
            {cart.length === 0
              ? "Your cart is empty"
              : cart.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <div className="row-img">
                      <img
                        className="rowimg"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <p>{item.title}</p>
                    <h2>{item.price}.00</h2>
                    <FaTrash onClick={() => removeFromCart(index)} />
                  </div>
                ))}
          </div>
          <div className="foot">
            <h5>Total</h5>
            <h2 id="total">Rs {total}.00</h2>
          </div>
          <button className="btn btn-success" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
      <button className="btn btn-secondary">
        <a href="logo.html">Back</a>
      </button>
    </div>
  );
};

export default ProductCatalog;

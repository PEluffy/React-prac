import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
    image: "https://loremflickr.com/60/60/pasta",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.0,
    image: "https://loremflickr.com/60/60/food",
  },
  {
    id: 3,
    name: "Product 3",
    price: 20.0,
    image: "https://loremflickr.com/60/60/momo",
  },
  {
    id: 4,
    name: "Product 4",
    price: 20.0,
    image: "https://loremflickr.com/60/60/nelson",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);
  function handleCheckout(total) {
    setPurchased((curr) => [...curr, total]);
    setCart([]);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>My Shopping Cart</h1>
      </header>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {cart.length > 0 && (
        <CartList total={total} cart={cart} handleCheckout={handleCheckout} />
      )}
      {purchased.length > 0 &&
        purchased.map((purchase, index) => (
          <div key={index}>
            {purchase}$ was your {index + 1}st purchase
          </div>
        ))}
    </div>
  );
}
function CartList({ total, cart, handleCheckout }) {
  function onClickCheckout() {
    handleCheckout(total);
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cartList">
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button className="button" onClick={onClickCheckout}>
        Checkout
      </button>
    </div>
  );
}

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="image" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="button">
        Add to Cart
      </button>
    </div>
  );
}

export default App;

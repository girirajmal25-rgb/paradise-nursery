
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
    description: "A beautiful and easy-to-care-for succulent."
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
    description: "A stylish indoor plant for your home."
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
    description: "An elegant plant with beautiful flowers."
  },
  {
    id: 4,
    name: "Monstera",
    category: "Indoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
    description: "A tropical plant with attractive leaves."
  },
  {
    id: 5,
    name: "Jade Plant",
    category: "Succulents",
    price: 18,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
    description: "A lovely low-maintenance succulent."
  },
  {
    id: 6,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500",
    description: "A colorful flowering plant for indoor spaces."
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <h2>Our Beautiful Plants</h2>
        <p>Bring nature home with our wonderful plant collection.</p>
        <a href="/cart" className="cart-link">
          🛒 Cart ({cartItems.reduce(
            (total, item) => total + item.quantity, 0
          )})
        </a>
      </header>

      <nav className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? "active" : ""
            }
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const inCart = cartItems.some(
            (item) => item.id === product.id
          );

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-category">
                {product.category}
              </p>
              <h4>${product.price.toFixed(2)}</h4>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={inCart}
              >
                {inCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;

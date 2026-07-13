import "./Products.css";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");


useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(productList);
  } catch (error) {
    console.error(error);
  }
};

const categories = [
  "All",
  "Gas Stove",
  "Pressure Cooker",
  "Mixer Grinder",
  "Wet Grinder",
  "Chimney",
  "Water Purifier",
  "Induction Stove"
];

  return (
    <section className="products-page">
      <h1>Our Products</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-buttons">
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
</div>

      <div className="products-grid">

       { products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase()) &&
  (selectedCategory === "All" ||
   product.category === selectedCategory)
)
       
          .map((product) => (
            <div className="product-card" key={product.id}>
              

           {product.image ? (
             <img src={product.image} alt={product.name} />
                    ) : (
             <div className="no-image">No Image</div>
                  )}

            

              <h3>{product.name}</h3>

              <p>{product.category}</p>

              <h4>{product.price}</h4>

              {product.stock === "In Stock"  ? (
                <p className="stock in">🟢 In Stock</p>
              ) : (
                <p className="stock out">🔴 Out of Stock</p>
              )}

              <Link to={`/products/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Products;
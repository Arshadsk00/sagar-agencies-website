import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./ManageProducts.css";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(data);
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "products", id));

    alert("Product Deleted Successfully!");

    fetchProducts();
  };

  return (
    <div className="manage-products">

      <h1>Manage Products</h1>

      {products.map((product) => (
        <div className="manage-card" key={product.id}>

          {product.image ? (
  <img src={product.image} alt={product.name} />
) : (
  <div className="no-image">No Image</div>
)}

 

          <div>

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <h3>₹ {product.price}</h3>

            <p>{product.stock}</p>

          </div>

          

          <Link to={`/admin/edit-product/${product.id}`}>
                    <button>Edit</button>
                </Link>

          <button
            className="delete-btn"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default ManageProducts;
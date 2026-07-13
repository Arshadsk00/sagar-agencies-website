import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({
          id: docSnap.id,
          ...docSnap.data(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="product-details">


      {product.image ? (
  <img src={product.image} alt={product.name} />
) : (
  <p>No Image Available</p>
)}
  

      <div className="details">
        <h1>{product.name}</h1>

        <h2>{product.price}</h2>

        <p>{product.description}</p>

        <p><strong>Brand:</strong> {product.brand}</p>

        <p><strong>Warranty:</strong> {product.warranty}</p>

        <p>
          <strong>Status:</strong>{" "}
          {product.stock === "In Stock" ? "🟢 In Stock" : "🔴 Out of Stock"}
        </p>

        <Link to="/products" className="back-btn">
  ← Back to Products
</Link>

        <button>📞 Call Now</button>

        <button>💬 WhatsApp</button>
      </div>
    </section>
  );
}

export default ProductDetails;
import "./AddProduct.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { db } from "../firebase/firebase";

import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";


function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [warranty, setWarranty] = useState("");
  const [stock, setStock] = useState("In Stock");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {

    const docRef = doc(db, "products", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      const data = docSnap.data();

      setName(data.name || "");
      setCategory(data.category || "");
      setPrice(data.price || "");
      setDescription(data.description || "");
      setBrand(data.brand || "");
      setWarranty(data.warranty || "");
      setStock(data.stock || "In Stock");
      setImage(data.image || "");
    }

  };


  const updateProduct = async () => {
  try {
    let imageUrl = image;

    // Upload new image if user selected one
    if (imageFile) {
      const data = new FormData();

      data.append("file", imageFile);
      data.append("upload_preset", "sagar_agencies");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/ga3ctpbc/image/upload",
        data
      );

      imageUrl = res.data.secure_url;
    }

    await updateDoc(doc(db, "products", id), {
      name,
      category,
      price,
      description,
      brand,
      warranty,
      stock,
      image: imageUrl,
    });

    alert("Product Updated Successfully!");
    navigate("/admin/manage-products");

  } catch (error) {
   
    alert("Failed to update product.");
  }
};

  


  return (

    <div className="add-product">

      <h1>Edit Product</h1>

      <form>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Gas Stove">Gas Stove</option>
          <option value="Pressure Cooker">Pressure Cooker</option>
          <option value="Mixer Grinder">Mixer Grinder</option>
          <option value="Kitchen Chimney">Kitchen Chimney</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          type="text"
          placeholder="Warranty"
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
        />

        <select
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

       

        <input
 type="file"
 accept="image/*"
 onChange={(e)=>setImageFile(e.target.files[0])}
/> 

        <button
          type="button"
          onClick={updateProduct} >
          Update Product
        </button>

      </form>

    </div>

  );
}

export default EditProduct;
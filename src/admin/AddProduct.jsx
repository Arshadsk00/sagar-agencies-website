import "./AddProduct.css";
import { useState } from "react";
import { db } from "../firebase/firebase";

import axios from "axios";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddProduct() {
  const [name, setName] = useState("");
const [category, setCategory] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [brand, setBrand] = useState("");
const [warranty, setWarranty] = useState("");
const [stock, setStock] = useState("In Stock");
const [image, setImage] = useState(null);

const saveProduct = async () => {
  try {
       let imageUrl = "";


    if (image) {
  const data = new FormData();

  data.append("file", image);
  data.append("upload_preset", "sagar_agencies");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/ga3ctpbc/image/upload",
      data
    );

     

   

    imageUrl = res.data.secure_url;

  } catch (err) {
    
    alert("Cloudinary Upload Failed");
    return;
  }
  }

      await addDoc(collection(db, "products"), {
        name,
        category,
        price: Number(price),
        description,
        brand,
        warranty,
        stock,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

    alert("Product Added Successfully!");

    setName("");
    setCategory("");
    setPrice("");
    setDescription("");
    setBrand("");
    setWarranty("");
    setStock("In Stock");
    setImage(null);

  } catch (error) {
    console.error(error);
    alert("Failed to add product.");
  }
};
  return (
    <div className="add-product">

      <h1>Add Product</h1>

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
<option value="Mixie">Mixie</option>
<option value="Wet Grinder">Wet Grinder</option>
<option value="Rice cooker">Rice Cooker</option>
<option value="Induction Stove">Induction Stove</option>
<option value="Other">Other</option>

  
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
        ></textarea>

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


       <select value={stock} onChange={(e) => setStock(e.target.value)}
>           <option value="In Stock">In Stock</option>
           <option value="Out of Stock">Out of Stock</option>
        </select>
      
      
            

              <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    console.log("selected file:" ,e.target.files[0]);
    setImage(e.target.files[0]);
  }}
/>


        <button type="button" onClick={saveProduct}>  Save Product</button>

      </form>

    </div>
  );
}

export default AddProduct;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookService from "./pages/BookService";
import ProductDetails from "./pages/ProductDetails";
import Services from "./pages/Services";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import EditProduct from "./admin/EditProduct";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/manage-products" element={<ManageProducts />}/>
        <Route path="/admin/edit-product/:id" element={<EditProduct />}/>
      </Routes>
    </>
  );
}

export default App;




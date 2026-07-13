import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">

        <Link to="/admin/add-product" className="card">
          <h2>➕ Add Product</h2>
          <p>Add new kitchen appliances</p>
        </Link>

        
 <Link to="/admin/manage-products" className="card">
                 <h2>📦 Manage Products</h2>
                 <p>Edit or Delete Products</p>
</Link>

       

        <Link to="/" className="card logout">
          <h2>🚪 Logout</h2>
          <p>Return to Website</p>
        </Link>

       

      </div>

    </div>
  );
}

export default Dashboard;
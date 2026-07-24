import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <div className="sidebar">

      <h2 className="logo">
        ERP CRM
      </h2>

      <Link to="/dashboard">
        🏠 Dashboard
      </Link>

      <Link to="/products">
        📦 Products
      </Link>

      <Link to="/customers">
        👥 Customers
      </Link>

      <Link to="/settings">
        ⚙ Settings
      </Link>


      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;
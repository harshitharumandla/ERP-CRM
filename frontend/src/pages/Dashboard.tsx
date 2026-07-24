import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import InventoryStats from "../components/InventoryStats";

import Products from "./Products";
import Customers from "./Customers";

import AddProduct from "./AddProduct";
import AddCustomer from "./AddCustomer";

import "../sidebar.css";


function Dashboard() {

  return (

    <div className="layout">


      <Sidebar />


      <div className="content">


        <h1>ERP CRM Dashboard</h1>

        <h2>Welcome Admin 👋</h2>


        {/* Dashboard Cards */}

        <StatsCards />

        <InventoryStats />



        {/* Add Product */}

        <div className="card">

          <h2>Add Product</h2>

          <AddProduct />

        </div>



        {/* Add Customer */}

        <div className="card">

          <h2>Add Customer</h2>

          <AddCustomer />

        </div>



        {/* Product List */}

        <div className="card">

          <Products />

        </div>



        {/* Customer List */}

        <div className="card">

          <Customers />

        </div>


      </div>


    </div>

  );

}


export default Dashboard;
import { useEffect, useState } from "react";
import axios from "axios";

function StatsCards() {

  const [productCount, setProductCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);


  useEffect(() => {

    axios.get("http://localhost:5000/products")
      .then((res)=>{
        setProductCount(res.data.products.length);
      });


    axios.get("http://localhost:5000/customers")
      .then((res)=>{
        setCustomerCount(res.data.customers.length);
      });


  }, []);



  return (

    <div className="stats">


      <div className="stat-card">

        <h3>Total Products</h3>

        <h1>{productCount}</h1>

      </div>



      <div className="stat-card">

        <h3>Total Customers</h3>

        <h1>{customerCount}</h1>

      </div>



      <div className="stat-card">

        <h3>Status</h3>

        <h1>Active</h1>

      </div>


    </div>

  );

}


export default StatsCards;
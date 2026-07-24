import { useEffect, useState } from "react";
import axios from "axios";

function InventoryStats() {

  const [value, setValue] = useState(0);
  const [lowStock, setLowStock] = useState(0);


  useEffect(() => {

    axios.get("http://localhost:5000/products")
      .then((res)=>{

        const products = res.data.products;

        let total = 0;
        let low = 0;


        products.forEach((product:any)=>{

          total += product.price * product.quantity;


          if(product.quantity <= 5){
            low++;
          }

        });


        setValue(total);
        setLowStock(low);

      });


  }, []);



  return (

    <div className="stats">


      <div className="stat-card">

        <h3>Inventory Value</h3>

        <h1>₹{value}</h1>

      </div>



      <div className="stat-card">

        <h3>Low Stock</h3>

        <h1>{lowStock}</h1>

      </div>


    </div>

  );

}


export default InventoryStats;
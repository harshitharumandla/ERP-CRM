import { useState } from "react";
import axios from "axios";

function EditProduct() {

  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const updateProduct = async () => {

    try {

      await axios.put(
        `http://localhost:5000/products/${id}`,
        {
          productName,
          price: Number(price),
          quantity: Number(quantity)
        }
      );

      alert("Product updated successfully");

    } catch {

      alert("Update failed");

    }

  };


  return (
    <div>

      <h2>Update Product</h2>

      <input
        placeholder="Product ID"
        onChange={(e)=>setId(e.target.value)}
      />

      <br />

      <input
        placeholder="Product Name"
        onChange={(e)=>setProductName(e.target.value)}
      />

      <br />

      <input
        placeholder="Price"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br />

      <input
        placeholder="Quantity"
        onChange={(e)=>setQuantity(e.target.value)}
      />

      <br /><br />

      <button onClick={updateProduct}>
        Update Product
      </button>

    </div>
  );
}

export default EditProduct;
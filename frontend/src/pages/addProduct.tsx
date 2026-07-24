import { useState } from "react";
import axios from "axios";

function AddProduct() {

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async () => {

    try {

      await axios.post(
        "http://localhost:5000/products",
        {
          productName,
          category,
          brand,
          price: Number(price),
          quantity: Number(quantity),
          description
        }
      );

      alert("Product added successfully");

      setProductName("");
      setCategory("");
      setBrand("");
      setPrice("");
      setQuantity("");
      setDescription("");

    } catch (error) {

      alert("Failed to add product");

    }
  };


  return (
    <div style={{padding:"30px"}}>

      <h1 
        style={{
          fontSize:"40px",
          fontWeight:"700",
          color:"#000",
          marginBottom:"30px"
        }}
      >
        Add Product
      </h1>


      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e)=>setProductName(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Brand"
        value={brand}
        onChange={(e)=>setBrand(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <br/><br/>


      <button onClick={addProduct}>
        Add Product
      </button>

    </div>
  );
}

export default AddProduct;
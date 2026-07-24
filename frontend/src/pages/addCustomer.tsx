import { useState } from "react";
import axios from "axios";

function AddCustomer() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");


  const addCustomer = async () => {

    try {

      await axios.post(
        "http://localhost:5000/customers",
        {
          name,
          email,
          phone,
          company
        }
      );

      alert("Customer added successfully");

      setName("");
      setEmail("");
      setPhone("");
      setCompany("");

    } catch (error) {

      alert("Failed to add customer");

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
        Add Customer
      </h1>


      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <br/><br/>


      <input
        placeholder="Company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
      />

      <br/><br/>


      <button onClick={addCustomer}>
        Add Customer
      </button>


    </div>
  );
}

export default AddCustomer;
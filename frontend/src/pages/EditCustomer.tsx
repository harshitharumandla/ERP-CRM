import { useState } from "react";
import axios from "axios";

function EditCustomer() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const updateCustomer = async () => {

    try {

      await axios.put(
        `http://localhost:5000/customers/${id}`,
        {
          name,
          phone,
          company
        }
      );

      alert("Customer updated successfully");

    } catch {

      alert("Update failed");

    }

  };


  return (
    <div>

      <h2>Update Customer</h2>

      <input
        placeholder="Customer ID"
        onChange={(e)=>setId(e.target.value)}
      />

      <br />

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Phone"
        onChange={(e)=>setPhone(e.target.value)}
      />

      <br />

      <input
        placeholder="Company"
        onChange={(e)=>setCompany(e.target.value)}
      />

      <br /><br />

      <button onClick={updateCustomer}>
        Update Customer
      </button>

    </div>
  );
}

export default EditCustomer;
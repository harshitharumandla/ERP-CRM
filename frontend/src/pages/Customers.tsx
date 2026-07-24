import { useEffect, useState } from "react";
import axios from "axios";

import "../table.css";


function Customers() {

  const [customers, setCustomers] = useState<any[]>([]);
  const [search, setSearch] = useState("");



  const getCustomers = async () => {

    const response = await axios.get(
      "http://localhost:5000/customers"
    );

    setCustomers(response.data.customers);

  };



  useEffect(() => {

    getCustomers();

  }, []);



  const deleteCustomer = async (id:number) => {

    await axios.delete(
      `http://localhost:5000/customers/${id}`
    );

    getCustomers();

  };



  const editCustomer = async (customer:any) => {

    const name = prompt(
      "Enter new customer name",
      customer.name
    );


    if(name) {

      await axios.put(

        `http://localhost:5000/customers/${customer.id}`,

        {
          name:name,
          email:customer.email,
          phone:customer.phone,
          company:customer.company
        }

      );


      getCustomers();

    }

  };



  const filteredCustomers = customers.filter((customer)=>

    customer.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );



  return (

    <div>

      <h2>Customer Management</h2>


      <input

        placeholder="Search Customer..."

        onChange={(e)=>setSearch(e.target.value)}

      />



      <table>


        <thead>

          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Action</th>

          </tr>

        </thead>



        <tbody>


        {filteredCustomers.map((customer)=>(


          <tr key={customer.id}>


            <td>{customer.name}</td>

            <td>{customer.email}</td>

            <td>{customer.phone}</td>

            <td>{customer.company}</td>


            <td>

              <button
                onClick={()=>editCustomer(customer)}
              >
                Edit
              </button>


              <button
                onClick={()=>deleteCustomer(customer.id)}
              >
                Delete
              </button>


            </td>


          </tr>


        ))}


        </tbody>


      </table>


    </div>

  );

}


export default Customers;
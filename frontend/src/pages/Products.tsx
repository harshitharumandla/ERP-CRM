import { useEffect, useState } from "react";
import axios from "axios";
import "../table.css";

function Products() {

  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  const editProduct = async (product: any) => {

    const name = prompt("Enter new product name", product.productName);

    if (!name) return;

    try {

      await axios.put(
        `http://localhost:5000/products/${product.id}`,
        {
          productName: name,
          category: product.category,
          brand: product.brand,
          price: product.price,
          quantity: product.quantity,
          description: product.description
        }
      );

      getProducts();

    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2>Product Inventory</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredProducts.map((product) => (
            <tr key={product.id}>

              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>

              <td>
                <button onClick={() => editProduct(product)}>
                  Edit
                </button>

                <button onClick={() => deleteProduct(product.id)}>
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

export default Products;
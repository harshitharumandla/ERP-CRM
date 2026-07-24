function Navbar() {
  return (
    <nav>
      <h2>ERP CRM</h2>

      <a href="/">Dashboard</a>
      {" | "}
      <a href="/products">Products</a>
      {" | "}
      <a href="/customers">Customers</a>
    </nav>
  );
}

export default Navbar;
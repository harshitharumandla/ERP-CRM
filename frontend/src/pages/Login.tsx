import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {

    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {

      localStorage.setItem("token", "admin-token");

      navigate("/dashboard");

    } else {

      alert("Invalid email or password");

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>ERP CRM</h1>

        <p>Manage your business easily</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;
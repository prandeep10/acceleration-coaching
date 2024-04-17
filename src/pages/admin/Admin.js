import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    if (username === "admin123" && password === "password123") {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="form-container">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="cards">
        <a href="/studentcrud" className="card">
          <h2>Student Update</h2>
        </a>
        <a href="/facultycrud" className="card">
          <h2>Faculty Update</h2>
        </a>
        <a href="/founderscrud" className="card">
          <h2>Founders Edit</h2>
        </a>
        <a href="/texts" className="card">
          <h2>Texts Edit</h2>
        </a>
        <a href="/gallery" className="card">
          <h2>Gallery Edit</h2>
        </a>
      </div>
    </div>
  );
};

export default Admin;

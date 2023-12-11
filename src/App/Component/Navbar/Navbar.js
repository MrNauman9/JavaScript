import React, { useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    // Reload the page to refresh the application
    window.location.reload();
    navigate("/login");
  };

  return (
    <nav className="nav__bar">
      {!localStorage.getItem("user") ? (
        <a className="btn">
          <i className="ri-user-3-line"></i>
          <span>Login</span>
        </a>
      ) : (
        <a className="btn" onClick={logout}>
          <i className="ri-user-3-line"></i>
          <span>Logout</span>
        </a>
      )}
    </nav>
  );
}

export default Navbar;

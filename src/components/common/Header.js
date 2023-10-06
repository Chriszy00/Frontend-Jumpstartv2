import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/css/style-header.css";
import decodeJWT from "jwt-decode";
import { message } from "antd";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    // Check if user is logged in by checking localStorage or session storage
    const token = localStorage.getItem("accessToken");
    let isLoggedIn = token !== null;
    const roleName = localStorage.getItem("roleName") || "";

    // Check if the token exists and is not expired
    if (isLoggedIn && !isTokenValid(token)) {
      // Token is expired, remove it from local storage
      localStorage.removeItem("accessToken");
      isLoggedIn = false; // Update isLoggedIn to false

      // Show notification and redirect to login
      message.error("Your session has timed out. Please login again.");
      navigate("/login"); // Redirect to the login page
    }

    setIsLoggedIn(isLoggedIn);
    setRoleName(roleName);
  }, [navigate]);

  function isTokenValid(token) {
    if (!token) {
      return false;
    }

    // Decode the token (you may need to use a JWT library)
    const decodedToken = decodeJWT(token);

    // Check if the token has an expiration date
    if (!decodedToken.exp) {
      return true; // Token has no expiration date, consider it valid
    }

    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp > currentTime;
  }

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  const userId = localStorage.getItem("userId");

  return (
    <header>
      {/* Main Navbar */}
      {(roleName !== "MEMBER" || !isLoggedIn) && ( // Conditionally render the main navbar
        <nav className="navbar navbar-expand-lg navbar-light text-uppercase custom-font-med bg-navbar1">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="navbar-brand text-dark" to="/">
                    Jumpstart
                  </Link>
                </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/membership">
                      
                      Apply Membership
                    </Link>
                  </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="fa fa-shopping-cart"></i> Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {/* User Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          roleName === "MEMBER" ? "bg-custom-color" : "bg-navbar2"
        } text-uppercase custom-font-med`}
      >
        <div className="container p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarUser"
            aria-controls="navbarUser"
            aria-expanded="false"
            aria-label="Toggle User Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarUser">
            <ul className="navbar-nav mr-auto">
              {isLoggedIn ? (
                <>
                  {roleName === "USER" && (
                    <>
                      <li className="nav-item me-2">
                        <Link className="nav-link" to="/user/home">
                          <i className="fa fa-home fa-lg me-2"></i>
                          Home
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          className="nav-link"
                          to={`/user/profile/${userId}`}
                        >
                          <i className="fa fa-user fa-lg me-2"></i>
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link className="nav-link" to="/products">
                          <i className="fa fa-book fa-lg me-2"></i>
                          Products
                        </Link>
                      </li>
                    </>
                  )}

                  {roleName === "MEMBER" && (
                    <>
                      <li className="nav-item me-2">
                        <Link className="navbar-brand text-dark" to="/">
                          Jumpstart
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link className="nav-link" to="/member/home">
                          <i className="fa fa-home fa-lg me-2"></i>
                          Home
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link
                          className="nav-link"
                          to={`/user/profile/${userId}`}
                        >
                          <i className="fa fa-user fa-lg me-2"></i>
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link className="nav-link" to="/member/products">
                          <i className="fa fa-book fa-lg me-2"></i>
                          Products
                        </Link>
                      </li>
                      <li className="nav-item me-2">
                        <Link className="nav-link" to="/cart">
                          <i className="fa fa-shopping-cart fa-lg me-1"></i>{" "}
                          Cart
                        </Link>
                      </li>
                    </>
                  )}
                </>
              ) : null}
            </ul>

            {!isLoggedIn && (
              <ul className="navbar-nav ml-auto">
                {" "}
                {/* This will align the links to the right */}
                <>
                  <li className="nav-item me-2">
                    <Link className="nav-link" to="/login">
                      <i className="fa fa-sign-in fa-lg me-2"></i>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      <i className="fa fa-user-plus fa-lg me-2"></i>
                      Register
                    </Link>
                  </li>
                </>
              </ul>
            )}

            {isLoggedIn && (
              <ul className="navbar-nav ml-auto">
                {" "}
                {/* This will align the logout button to the right */}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-custom text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

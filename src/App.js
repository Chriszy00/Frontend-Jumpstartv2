import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Registration from "./components/common/register";
import Login from "./components/common/Login";
import Home from "./components/common/Home";
import Admin from "./components/users/Admin";
import Membership from "./components/common/member";
import PaymentSummary from "./components/common/PaymentSummary";
import UserProfile from "./components/common/UserProfile";
import Header from "./components/common/Header";
import ProductList from "./components/common/ProductList";
import ThankYouPage from "./components/common/thankyou";
import { NotificationProvider } from "./components/common/NotificationContext";
import MembersProductList from "./components/common/MembersProductList";
import MembersHome from "./components/common/MembersHome";
class App extends Component {
  render() {
    return (
      <Router>
        {/* Render the Header component here for all routes except /admin/dashboard */}
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  {/* USER ROLE */}
                  <Route exact path="/user/home" element={<Home />} />
                  <Route exact path="/products" element={<ProductList />} />
                  {/* END OF USER ROLE */}

                  {/* MEMBER ROLE */}
                  <Route exact path="/member/home" element={<MembersHome/>} />
                  <Route exact path="/member/products" element={<MembersProductList/>} />

                  {/* END OF MEMBER ROLE */}

                  {/* ALL ROLES */}
                  <Route exact path="/membership" element={<Membership />} />
                  <Route
                    exact
                    path="/payment-summary"
                    element={<PaymentSummary />}
                  />
                  <Route
                    exact
                    path="/membership/payment-summary"
                    element={<PaymentSummary />}
                  />
                  <Route
                    exact
                    path="/user/profile/:id"
                    element={<UserProfile />}
                  />
                  <Route exact path="/thank-you" element={<ThankYouPage />} />
                </Routes>
              </>
            }
          />
          {/* Exclude /admin/dashboard from being enclosed by Header */}
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

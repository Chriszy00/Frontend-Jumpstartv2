import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React, { Component } from 'react';
import Registration from "./components/common/register";
import Login from "./components/common/Login";
import Home from "./components/common/Home";
import Admin from "./components/users/Admin";
import Membership from "./components/common/member";
import PaymentSummary from "./components/common/PaymentSummary";
import UserProfile from "./components/common/UserProfile";

class App extends Component {
 render() {
  return (
<Router>
      <Routes>
      <Route exact path="/register" element={<Registration/>} />
      <Route exact path="/login" element={<Login/>} />

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/admin/dashboard" element={<Admin/>}/>
      <Route exact path="/membership" element={<Membership/>}/>
      <Route exact path="/payment-summary" element={<PaymentSummary/>}/>
      <Route exact path="/user/profile/:id" element={<UserProfile/>}/>








      </Routes>
     </Router>
  );
 }
}
export default App;

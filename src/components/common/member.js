import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "../../assets/css/style-membership.css";
import axios from "axios";
import { notification } from "antd";
import {apply} from "../../util/APIUtils";

const Membership = () => {
  const getLoggedInUserId = () => {
    const userId = localStorage.getItem("userId"); // Retrieve user ID using the correct key
    return userId ? Number(userId) : null; // Convert to a number if needed
  };

  const navigate = useNavigate();

  const handleMembershipApplication = (membershipType, price) => {
    const userId = getLoggedInUserId();
    const roleName = localStorage.getItem("roleName"); // Retrieve user's role

    if (!userId) {
      // User is not logged in, show a notification and redirect to the login page
      notification.error({
        message: "Jumpstart: ERROR",
        description: "Please log in to apply for membership",
      });

      navigate("/login"); // Replace "/login" with the actual login route
      return; // Stop further execution
    }

    const headers = {};

    if (localStorage.getItem("ACCESS_TOKEN")) {
      headers["Authorization"] = `Bearer ${localStorage.getItem(
          "ACCESS_TOKEN"
      )}`;
    }

    const membershipData = {
      membershipType: membershipType,
      price: price,
      member: {
        id: userId,
        roleName: roleName, // Include the roleName in the request
      },
    };

    localStorage.setItem("membershipData", JSON.stringify(membershipData));

    apply(membershipData)
        .then((response) => {
          console.log("Membership application successful:", response.data);

          // Show success notification
          notification.success({
            message: "Success",
            description: "Membership application successful",
          });

          navigate("/payment-summary");
        })
        .catch((error) => {
          console.error("Error applying for membership", error);

          // Show error notification
          notification.error({
            message: "Error",
            description: "Error applying for membership",
          });
        });

  };
  
  return (
    <div className="custom-bg pt-5">
    <div className="container vh-100 custom-font-style ">
      <div className="text-center">
        <div className="" role="tablist">
          <h2 className="pb-5 custom-font-style">
            Join Jumpstart, Be A Member Now!
          </h2>
        </div>
      </div>
      <div
        className="tab-content wow fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div role="tabpanel" className="tab-pane fade show active" id="yearly">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-30 mb-5">
              <div className="price-item text-center popular">
                <div className="price-top custom-font-style">
                  <h4 className="custom-font-style">Premium</h4>
                  <h2 className="mb-0 custom-font-style">
                    <sup>$</sup>29.99
                  </h2>
                  <span className="text-capitalize custom-font-style">
                    per month
                  </span>
                </div>
                <div className="price-content custom-font-style">
                  <div className="scrollable-list">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left custom-ul">
                    <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">10% off on all purchases</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Early Access to Sales</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Priority Customer Support</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Free Shipping on Online Orders</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>30 Days Extended Return Policy</span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <button
                      className="btn btn-custom1 btn-light mb-2 w-100"
                      onClick={() => handleMembershipApplication("Premium", 29.99)}
                    >
                      Apply Membership
                    </button>
                    <Link
                      to="/renewal"
                      className="btn btn-outline-custom1 btn-light mb-2 w-100"
                    >
                      Renewal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-30">
              <div className="price-item text-center">
                <div className="price-top">
                  <h4 className="custom-font-style">Business</h4>
                  <h2 className="mb-0 custom-font-style">
                    <sup>$</sup>69.99
                  </h2>
                  <span className="text-capitalize">per month</span>
                </div>
                <div className="price-content">
                  <div className="scrollable-list">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left custom-ul">
                    <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">15% off on all purchases</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Early Access to Sales</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Priority Customer Support</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Free Shipping on Online Orders</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Access to Business-specific Services</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Tax Exemption for Business Purchases</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>60 Days Extended Return Policy</span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <button
                      className="btn btn-custom2 btn-light mb-2 w-100"
                      onClick={() => handleMembershipApplication("Business", 69.99)}
                    >
                      Apply Membership
                    </button>
                    <Link
                      to="/renewal"
                      className="btn btn-outline-custom2 btn-light mb-2 w-100"
                    >
                      Renewal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Membership;

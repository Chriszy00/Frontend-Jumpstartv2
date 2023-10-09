import {useState, useEffect, useRef} from "react";
import React from "react";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style-home.css";
import {Link} from "react-router-dom";

const MembersHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [roleName, setRoleName] = useState("");

    useEffect(() => {
        // Check if a valid JWT token is present in local storage or cookies
        const token = localStorage.getItem("accessToken"); // You should replace "jwtToken" with your actual token key
        if (token) {
            setIsLoggedIn(true);

            // You can retrieve the roleName from your access token here
            // Replace 'ROLE_MEMBER' with the actual role name for members in your JWT
            const userRole = 'ROLE_MEMBER'; // Replace with your logic to extract the role
            setRoleName(userRole);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const contentRef = useRef(null);
    // Function to scroll to the top
    const scrollToTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    };

    // Function to calculate the discounted price
    const calculateDiscountedPrice = (price) => {
        // Apply a 10% discount for all users
        let discountedPrice = price * 0.9;

        // If the user has a role of "MEMBER", apply an additional 5% discount
        if (roleName === 'ROLE_MEMBER') {
            discountedPrice *= 0.95;
        }

        return discountedPrice.toFixed(2); // Round to 2 decimal places
    };

    // Sample product data (replace with your actual product data)
    const products = [
        {
            name: "Denim shirt",
            category: "Shirt",
            price: 119.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
        },
        {
            name: "Sweatshirt",
            category: "Sport wear",
            price: 139.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
        },
        {
            name: "Grey blouse",
            category: "Sport wear",
            price: 99.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
        },
        {
            name: "Black jacket",
            category: "Outwear",
            price: 199.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
        },
        // next row
        {
            name: "Black jacket",
            category: "Outwear",
            price: 219.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
        },
        {
            name: "Grey blouse",
            category: "Sport wear",
            price: 89.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
        },
        {
            name: "Sweatshirt",
            category: "Sport wear",
            price: 149.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
        },
        {
            name: "Denim shirt",
            category: "Shirt",
            price: 124.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
        },
        // Add more products here
    ];

    return (
        <div className="custom-bg min-vh-100">
            {/* carousel */}
            {!isLoggedIn && (
                <div
                    id="carouselExampleCaptions"
                    className="carousel custom-bg slide carousel-fade"
                    data-mdb-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg"
                                className="d-block w-100"
                                alt="Wild Landscape"
                            />
                            <div
                                className="mask"
                                style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}
                            ></div>
                            <div className="carousel-caption d-none d-sm-block mb-5">
                                <h1 className="mb-3">
                                    <strong className="text-white custom-font-bold fs-1">
                                        Welcome to Jumpstart
                                    </strong>
                                </h1>
                                <p className="mb-2">
                                    <strong className="text-white fs-4 fw-normal custom-font-med">
                                        Unleash Your Style: Elevate Your Wardrobe
                                    </strong>
                                </p>
                                <p className="mb-4 d-none d-md-block">
                                    <strong className="text-white fs-5 fw-normal custom-font">
                                        Are you ready to elevate your style game? Get ready to turn
                                        heads and make a statement with our brand new collection!
                                        We're excited to introduce the latest fashion trends that will
                                        take your wardrobe to a whole new level of chic.
                                    </strong>
                                </p>
                            </div>
                        </div>
                        {/* Add more carousel items as needed */}
                    </div>
                </div>
            )}
            {/* Main layout */}
            <main ref={contentRef}>
                <div className="container min-vh-100 pt-5  custom-font ">
                    {/* Navbar */}
                    <nav
                        className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2"
                        style={{backgroundColor: "#d0472f"}}
                    >
                        {/* Container wrapper */}
                        <div className="container-fluid">
                            {/* Navbar brand */}
                            <a className="navbar-brand " href="#">
                                Categories:
                            </a>

                            {/* Toggle button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent2"
                                aria-controls="navbarSupportedContent2"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>

                            {/* Collapsible wrapper */}
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent2"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* Link */}
                                    <li className="nav-item active">
                                        <Link className="nav-link text-white" to="/member/products"
                                              onClick={scrollToTop}>
                                            All
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Shirts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Sport wears
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Outwears
                                        </a>
                                    </li>
                                </ul>

                                {/* Search */}
                                <form className="w-auto py-1" style={{maxWidth: "12rem"}}>
                                    <input
                                        type="search"
                                        className="form-control rounded-0"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </form>
                            </div>
                        </div>
                        {/* Container wrapper */}
                    </nav>
                    {/* Navbar */}

                    <section>
                        <div className="text-center">
                            <div className="row">
                                {products.map((product, index) => (
                                    <div className="col-lg-3 col-md-6 mb-4 custom-font" key={index}>
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src={product.image}
                                                    className="w-100"
                                                    alt={product.name}
                                                />
                                                <a href="#!">
                                                    <div className="hover-overlay">
                                                        <div
                                                            className="mask"
                                                            style={{
                                                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <a href="" className="text-reset ">
                                                    <h5 className="card-title mb-2 custom-font fw-bold">
                                                        {product.name}
                                                    </h5>
                                                </a>
                                                <a href="" className="text-reset ">
                                                    <p>{product.category}</p>
                                                </a>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="original-price">
                                                        <del className="text-danger">{product.price}$</del>
                                                    </div>
                                                    <div className="discounted-price">
                                                        <h6 className="mb-0 price custom-font fw-bold">
                                                            {calculateDiscountedPrice(product.price)}$
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                    {/* Products */}
                </div>
            </main>
            {/* Main layout */}
        </div>
    );
};

export default MembersHome

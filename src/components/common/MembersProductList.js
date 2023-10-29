import React, {useEffect, useState} from "react";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style-products.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function MembersProductList() {

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
            name: "T-shirts with multiple colors",
            price: 34.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
        },
        {
            name: "Winter Jacket for Men",
            price: 119.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
        },
        {
            name: "Slim sleeve wallet Italian leather",
            price: 499.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
        },
        // Next Row
        {
            name: "Summer New Men's Denim Shorts",
            price: 49.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
        },
        {
            name: "Blazer Suit Dress Jacket for Men",
            price: 349.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
        },
        {
            name: "T-shirts with multiple colors",
            price: 59.99,
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
        },
    ];
    return (
        <div className="custom-bg">
            <div className="container p-5 min-vh-100 border-bottom custom-font">
                {/* Main Navigation */}

                {/* sidebar + content */}
                <section className="">
                    <div className="container">
                        <div className="row">
                            {/* sidebar */}
                            <div className="col-lg-3">
                                {/* Toggle button */}
                                <button
                                    className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span>Show filter</span>
                                </button>
                                {/* Collapsible wrapper */}
                                <div
                                    className="collapse card d-lg-block mb-5"
                                    id="navbarSupportedContent"
                                >
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button btn-custom text-dark bg-light"
                                                    type="button"
                                                    data-mdb-toggle="collapse"
                                                    data-mdb-target="#panelsStayOpen-collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne"
                                                >
                                                    Related items
                                                </button>
                                            </h2>
                                            <div
                                                id="panelsStayOpen-collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                            >
                                                <div className="accordion-body">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Electronics{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Home items{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Books, Magazines{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Men's clothing{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Interiors items{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Underwears{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Shoes for men{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-dark">
                                                                Accessories{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Add other accordion items here */}
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            {/* content */}
                            <div className="col-lg-9">
                                <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                                    <strong className="d-block py-2">32 Items found </strong>
                                    <div className="ms-auto">
                                        <select className="form-select d-inline-block w-auto border pt-1">
                                            <option value="0">Best match</option>
                                            <option value="1">Recommended</option>
                                            <option value="2">High rated</option>
                                            <option value="3">Randomly</option>
                                        </select>
                                        <div className="btn-group shadow-0 border ms-2">
                                            <a href="#" className="btn btn-light" title="List view">
                                                <i className="fa fa-bars fa-lg"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-light active"
                                                title="Grid view"
                                            >
                                                <i className="fa fa-th fa-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </header>

                                {/* Products */}
                                <div className="row">
                                    {products.map((product, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6 d-flex" key={index}>
                                            <div className="card w-100 my-2 shadow-2-strong">
                                                <img
                                                    src={product.image}
                                                    className="card-img-top"
                                                    alt=""
                                                />
                                                <div className="card-body d-flex flex-column">
                                                    <div className="original-price">
                                                        <del className="text-danger">{product.price}$</del>
                                                    </div>
                                                    <div className="discounted-price">
                                                        <h6 className="mb-0 price custom-font fw-bold">
                                                            {calculateDiscountedPrice(product.price)}$
                                                        </h6>
                                                    </div>
                                                    <p className="card-text">
                                                        {product.name}ø
                                                    </p>
                                                    <hr/>
                                                    <div className="d-flex align-items-end  ">
                                                        <a href="#!" className="btn btn-custom shadow-0 me-1">
                                                            Add to cart
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="btn btn-light border icon-hover px-2 pt-2"
                                                        >
                                                            <i className="fa fa-heart fa-lg text-secondary px-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* End of products */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* sidebar + content */}
            </div>
        </div>
    );
}

export default MembersProductList

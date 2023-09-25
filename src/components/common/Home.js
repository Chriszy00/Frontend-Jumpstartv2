import React from "react";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style-home.css";

const Home = () => {
  return (
    <>
      {/* carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
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
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className="carousel-caption d-none d-sm-block mb-5">
              <h1 className="mb-3">
                <strong className="text-white custom-font-bold fs-1">Welcome to Jumpstart</strong>
              </h1>
              <p className="mb-2">
                <strong className="text-white fs-4 fw-normal custom-font-med">Unleash Your Style: Elevate Your Wardrobe</strong>
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
        </div>
      </div>

      {/* Main layout */}
      <main>
        <div className="container custom-font">
          {/* Navbar */}
          <nav
            className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2"
            style={{ backgroundColor: "#607D8B" }}
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
                  <li className="nav-item acitve">
                    <a className="nav-link text-white" href="#">
                      All
                    </a>
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
                <form className="w-auto py-1" style={{ maxWidth: "12rem" }}>
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

          {/* Products */}
          <section>
            <div className="text-center">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 custom-font">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        className="w-100"
                        alt="img"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-dark ms-2">NEW</span>
                            </h5>
                          </div>
                        </div>
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
                    <div className="card-body ">
                      <a href="" className="text-reset ">
                        <h5 className="card-title mb-2 custom-font fw-bold">Denim shirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Shirt</p>
                      </a>
                      <h6 className="mb-3 price custom-font fw-bold">120$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 custom-font">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                        className="w-100"
                        alt="img"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2 custom-font">
                                bestseller
                              </span>
                            </h5>
                          </div>
                        </div>
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
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2 custom-font fw-bold">Sweatshirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price custom-font fw-bold">139$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 custom-font">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                        className="w-100"
                        alt="img"
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
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2 custom-font-bold">Grey blouse</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price custom-font-bold">99$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 custom-font">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                        className="w-100"
                        alt="img"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge sale-badge ms-2">
                                -10%
                              </span>
                            </h5>
                          </div>
                        </div>
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
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2 custom-font-bold">Black jacket</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Outwear</p>
                      </a>
                      <h6 className="mb-3 price">
                        <s>199$</s>
                        <strong className="ms-2 sale custom-font-bold">179$</strong>
                      </h6>
                    </div>
                  </div>
                </div>

                <div />

                <div className="row">
                  <div className="col-lg-3 col-md-6 mb-4 custom-font">
                    <div className="card">
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                          className="w-100"
                          alt="img"
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
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-2 custom-font-bold">Sweatshirt</h5>
                        </a>
                        <a href="" className="text-reset ">
                          <p>Sport wear</p>
                        </a>
                        <h6 className="mb-3 price custom-font-bold">139$</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4 custom-font">
                    <div className="card">
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                          className="w-100"
                          alt="img"
                        />
                        <a href="#!">
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5>
                                <span className="badge bg-success ms-2">
                                  Eco
                                </span>
                              </h5>
                            </div>
                          </div>
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
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-2 custom-font-bold">Grey blouse</h5>
                        </a>
                        <a href="" className="text-reset ">
                          <p>Sport wear</p>
                        </a>
                        <h6 className="mb-3 price custom-font-bold">99$</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4 custom-font">
                    <div className="card">
                      <div
                        className="bg-image hover-zoom ripple"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                          className="w-100"
                          alt="img"
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
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-2 custom-font-bold">Black jacket</h5>
                        </a>
                        <a href="" className="text-reset ">
                          <p>Outwear</p>
                        </a>
                        <h6 className="mb-3 price custom-font-bold">199$</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mb-4 custom-font">
                    <div className="card">
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                          className="w-100"
                          alt="img"
                        />
                        <a href="#!">
                          <div className={"hover-overlay"}>
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
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-2 custom-font-bold">Denim shirt</h5>
                        </a>
                        <a href="" className="text-reset ">
                          <p>Shirt</p>
                        </a>
                        <h6 className="mb-3 price custom-font-bold">120$</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other similar product cards go here */}
              </div>

              <div className="row">
                {/* Repeat the product cards section if needed */}
              </div>

              {/* Pagination */}
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3"
              >
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Pagination */}
            </div>
          </section>
          {/* Products */}
        </div>
      </main>
      {/* Main layout */}
    </>
  );
};

export default Home;

import React from "react";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style-products.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function MembersProductList() {
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex flex-row">
                            <h5 className="mb-1 me-1">$34.50</h5>
                            <span className="text-danger">
                              <s>$49.99</s>
                            </span>
                          </div>
                          <p className="card-text">
                            T-shirts with multiple colors, for men and lady
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$120.00</h5>
                          <p className="card-text">
                            Winter Jacket for Men and Women, All sizes
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$120.00</h5>
                          <p className="card-text">
                            T-shirts with multiple colors, for men and lady
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
                          className="card-img-top"
                          style={{ aspectRatio: "1 / 1" }}
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$120.00</h5>
                          <p className="card-text">
                            Blazer Suit Dress Jacket for Men, Blue color
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/14.webp"
                          className="card-img-top"
                          style={{ aspectRatio: "1 / 1" }}
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$510.00</h5>
                          <p className="card-text">
                            Slim sleeve wallet Italian leather - multiple colors
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$79.99</h5>
                          <p className="card-text">
                            T-shirts with multiple colors, for men and lady
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$120.00</h5>
                          <p className="card-text">
                            Winter Jacket for Men and Women, All sizes
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$120.00</h5>
                          <p className="card-text">
                            T-shirts with multiple colors, for men and lady
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
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">$43.50</h5>
                          <p className="card-text">
                            Summer New Men's Denim Jeans Shorts
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

import React, {useEffect, useState} from "react";
import "../../assets/js/init-alpine";
import "./css/tailwind.css";
import "./css/tailwind.output.css";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNotification} from "../common/NotificationContext";

function Admin() {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [application, setApplications] = useState([]);
    const navigate = useNavigate();
    const {userId} = useParams();

    useEffect(() => {
        fetchMembershipApplications();
    }, []);

    const fetchMembershipApplications = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/membership/applications"
            );
            if (response.status === 200) {
                setApplications(response.data);
            } else {
                console.error("Failed to fetch membership applications");
            }
        } catch (error) {
            console.error("Error fetching membership applications:", error);
        }
    };

    const toggleSideMenu = () => {
        setSideMenuOpen(!isSideMenuOpen);
    };

    const closeSideMenu = () => {
        setSideMenuOpen(false);
    };

    const toggleTheme = () => {
        setDark(!dark);
    };

    const handleLogout = () => {
        localStorage.clear();
        console.log("Logout");
        navigate("/");
    };

    const [disableApproveButton, setDisableApproveButton] = useState(false);
    const [disableDenyButton, setDisableDenyButton] = useState(false);

    const {showNotification} = useNotification();

    const handleApproval = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/admin/${id}/approve`
            );
            if (response.status === 200) {
                setApplications((applications) =>
                    applications.map((application) =>
                        application.id === id
                            ? { ...application, status: "approved" }
                            : application
                    )
                );

                // Disable the "Approve" button after it's clicked
                setDisableApproveButton(true);

                // Enable the "Deny" button after approval
                setDisableDenyButton(false);

                // Show a success toast
                toast.success("Application approved successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                console.error("Failed to approve membership application");
            }
        } catch (error) {
            console.error("Error approving membership application:", error);
        }
    };

    const handleDenial = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/admin/${id}/deny`
            );
            if (response.status === 200) {
                setApplications((applications) =>
                    applications.map((application) =>
                        application.id === id
                            ? { ...application, status: "denied" }
                            : application
                    )
                );

                // Disable the "Deny" button after it's clicked
                setDisableDenyButton(true);

                // Enable the "Approve" button after denial
                setDisableApproveButton(false);

                // Show a success toast
                toast.error("Application denied", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                console.error("Failed to deny membership application");
            }
        } catch (error) {
            console.error("Error denying membership application:", error);
        }
    };
    const userID = localStorage.getItem("userId");

    return (
        <div className={`flex h-screen ${dark ? "dark" : ""}`}>
            {/* Desktop sidebar */}
            <aside
                className={`z-20 hidden w-64 overflow-y-auto bg-white ${
                    dark ? "dark:bg-gray-800" : ""
                } md:block flex-shrink-0`}
            >
                <div className="py-4 text-gray-500 dark:text-gray-400 custom-font">
                    <a
                        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 custom-font-bold"
                        href="#a"
                    >
                        Jumpstart
                    </a>
                    <ul className="mt-6 p-0">
                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                href="dashboard"
                            >
                                <i className="fa fa-home fa-2x"></i>
                                <span className="ml-4">Dashboard</span>
                            </a>
                        </li>

                        <li className="relative px-6 py-3">
                            <Link
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                to={`/user/profile/${userID}`}
                            >
                                <i className="fa fa-user fa-2x"></i>
                                <span className="ml-4">Profile</span>
                            </Link>
                        </li>

                        <li className="relative px-6 py-3">
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                href="/"
                            >
                                <i class="fa fa-sign-out fa-2x"></i>
                                <span className="ml-3" onClick={handleLogout}>
                  Logout
                </span>
                            </a>
                        </li>
                    </ul>
                    {/* Add more sidebar items here */}
                </div>
            </aside>
            {/* Rest of the code */}
            {/* Mobile sidebar */}
            {/* Backdrop */}
            {isSideMenuOpen && (
                <div
                    className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
                    onClick={closeSideMenu}
                    onKeyDown={closeSideMenu}
                ></div>
            )}
            <aside
                className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden ${
                    isSideMenuOpen
                        ? "transform translate-x-0 ease-in opacity-100"
                        : "transform -translate-x-full ease-out opacity-0"
                }`}
            >
                <div className="py-4 text-gray-500 dark:text-gray-400 custom-font">
                    <a
                        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 custom-font-bold"
                        href="#a"
                    >
                        Jumpstart
                    </a>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
              <span
                  className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
                  style={{backgroundColor: "#d0472f", width: "5px"}}
                  aria-hidden="true"
              ></span>
                            <a
                                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                                href="index.html"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                <span className="ml-4 custom-font-bold">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    {/* Add more sidebar items here */}
                </div>
            </aside>
            <div className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                    <div
                        className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                        {/* Mobile hamburger */}
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleSideMenu}
                            aria-label="Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {/* Search input */}
                        <div className="flex justify-center flex-1 lg:mr-32">
                            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                    type="text"
                                    placeholder="Search for projects"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                        <ul className="flex items-center flex-shrink-0 space-x-6">
                            {/* Theme toggler */}
                            <li className="flex">
                                <button
                                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                                    onClick={toggleTheme}
                                    aria-label="Toggle color mode"
                                >
                                    {!dark ? (
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* Rest of your content */}
                <main className="h-full overflow-y-auto custom-main">
                    <div className="container px-6 mx-auto grid">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 custom-font-bold">
                            Dashboard
                        </h2>

                        {/* Cards */}
                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            {/* Card */}
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div
                                    className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                    </svg>
                                </div>
                                <div className="custom-font-med">
                                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Total clients
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        6389
                                    </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div
                                    className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="custom-font-med">
                                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Account balance
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        $ 46,760.89
                                    </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div
                                    className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                    </svg>
                                </div>
                                <div className="custom-font-med">
                                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        New sales
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        376
                                    </p>
                                </div>
                            </div>
                            {/* Card */}
                            <div className="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div
                                    className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="custom-font-med">
                                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        Pending contacts
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                        35
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="container px-6 mx-auto">
                        <div className="w-full overflow-x-auto rounded-lg shadow-md">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 custom-font-bold">
                                    <th className="px-4 py-3">Member Number</th>
                                    <th className="px-4 py-3">Membership Type</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {application.map((application) => (
                                    // Check if the status is not "approved" before rendering the row
                                    application.status.toLowerCase() !== "approved" && (
                                        <tr key={application.id} className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3">{application.membershipNumber}</td>
                                            <td className="px-4 py-3">{application.membershipType}</td>
                                            <td className="px-4 py-3">
                                                {application.status.toLowerCase() === "denied"
                                                    ? "Denied"
                                                    : "Pending"}
                                            </td>
                                            <td className="px-4 py-3">{application.approvedDate}</td>
                                            <td className="px-4 py-3">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleApproval(application.id)}
                                                    disabled={
                                                        disableApproveButton || application.status === "approved"
                                                    }
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className="ml-2 btn btn-danger"
                                                    onClick={() => handleDenial(application.id)}
                                                    disabled={disableDenyButton || application.status === "denied"}
                                                >
                                                    Deny
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Admin;

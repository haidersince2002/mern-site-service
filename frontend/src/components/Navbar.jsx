import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);

  const { isLoggedIn } = useAuth();

  // Load dark mode preference from localStorage on component mount
  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDarkMode(isDarkMode);
  // }, []);

  // Update localStorage and apply dark mode class to the document
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("darkMode", "true");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("darkMode", "false");
  //   }
  // }, [darkMode]);

  return (
    <header className="bg-gray-900 shadow-lg fixed w-full top-0 z-50 dark:bg-gray-800">
      {/* Centered Container */}
      <div className="w-4/5 mx-auto px-4">
        {" "}
        {/* 80% width (4/5) and centered */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors dark:text-gray-200"
          >
            ServiceX
          </NavLink>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition-colors dark:text-gray-200 dark:hover:text-gray-400 ${
                  isActive ? "border-b-2 border-blue-500" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition-colors dark:text-gray-200 dark:hover:text-gray-400 ${
                  isActive ? "border-b-2 border-blue-500" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition-colors dark:text-gray-200 dark:hover:text-gray-400 ${
                  isActive ? "border-b-2 border-blue-500" : ""
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition-colors dark:text-gray-200 dark:hover:text-gray-400 ${
                  isActive ? "border-b-2 border-blue-500" : ""
                }`
              }
            >
              Contact
            </NavLink>

            {isLoggedIn ? (
              <NavLink
                to="/logout"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Login
                </NavLink>
              </>
            )}
          </nav>
          {/* Dark Mode Toggle Button
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors dark:bg-gray-600 dark:hover:bg-gray-500 md:ml-4"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

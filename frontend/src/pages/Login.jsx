import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // Handling input changes
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch(`http://localhost:8080/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res_data = await response.json();

    if (response.ok) {
      console.log(res_data.token);

      storeTokenInLS(res_data.token);

      setUser({
        email: "",
        password: "",
      });
      navigate("/");
      toast.success("Login Succesful");
      toast.info(`Welcome to Haider Technical`);
    } else {
      toast.error(
        res_data.extraDetailes ? res_data.extraDetails : res_data.message
      );
    }

    console.log(response);
  };

  return (
    <>
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        {/* Main Container */}
        <main className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Login Image */}
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="/images/login.png"
                alt="login image"
                className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Login Form */}
            <div className="order-1 md:order-2">
              <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Login Form
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;

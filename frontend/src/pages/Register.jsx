import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  // Handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling register submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("Response from Server: ", res_data.extraDetails);

      if (response.ok) {
        //storing token in local storage
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
        toast.success("Registration Succesful");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }

      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        {/* Main Container */}
        <main className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Registration Image */}
            <div className="registration-image flex justify-center">
              <img
                src="/images/register.png"
                alt="register image"
                className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Registration Form */}
            <div className="registration-form">
              <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Registration Form
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>

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

                {/* Phone Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
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
                  Register
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setUserContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserContact({
      ...userContact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userContact);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASEURL}/api/form/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userContact),
        }
      );
      console.log("response", response);

      if (response.ok) {
        setUserContact({ ...user, message: "" });
        const data = await response.json();
        console.log("data", data);
        toast.success("Message sent succesfully");
      }
    } catch (error) {
      console.error("Failed while fetching data from contact form");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Container */}
      <main className="w-full max-w-6xl mt-10 mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="image flex justify-center">
            <img
              src="/images/about.png"
              alt="about image"
              className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Contact Us
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
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  autoComplete="off"
                  value={userContact.username}
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
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  autoComplete="off"
                  value={userContact.email}
                  onChange={handleInput}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  autoComplete="off"
                  rows="4"
                  value={userContact.message}
                  onChange={handleInput}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.28982664965!2d80.97867532484423!3d26.83879999699066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfcccdbecff0f%3A0x305a04e692868308!2sJaneshwar%20Mishra%20Park!5e0!3m2!1sen!2sus!4v1740307873082!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="rounded-lg shadow-lg"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </main>
    </section>
  );
};

export default Contact;

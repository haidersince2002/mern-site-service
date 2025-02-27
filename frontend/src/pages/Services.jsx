import React from "react";
import { useAuth } from "../store/auth";

const Services = () => {
  const { services } = useAuth();

  return (
    <section className="services-section bg-gray-100 dark:bg-gray-900 py-16">
      {/* Main Container */}
      <div className="container w-[80%] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="title text-4xl font-bold text-gray-800 dark:text-white mt-4 mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Explore the wide range of services we offer to meet your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((curElement, index) => {
            const { provider, price, service, description } = curElement;
            return (
              <div
                key={index}
                className="card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              >
                {/* Card Image */}
                <div className="card-img flex justify-center mb-4">
                  <img
                    src="/images/design.png"
                    alt="service image"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>

                {/* Card Details */}
                <div className="card-details grid grid-cols-2 gap-2 mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                    Provider: {provider}
                  </p>
                  <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                    Price: {price}
                  </p>
                </div>

                {/* Service Name */}
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service}
                </h2>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

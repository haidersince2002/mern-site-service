import React from "react";

const Analytics = () => {
  return (
    <section className="analytics section bg-white dark:bg-gray-800 py-16">
      <div className="w-[80%] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="div1">
          <h2 className="text-4xl font-bold text-blue-500">50+</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Registered Companies
          </p>
        </div>
        <div className="div2">
          <h2 className="text-4xl font-bold text-blue-500">10,000+</h2>
          <p className="text-gray-700 dark:text-gray-300">Happy Clients</p>
        </div>
        <div className="div3">
          <h2 className="text-4xl font-bold text-blue-500">500+</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Well-Known Developers
          </p>
        </div>
        <div className="div4">
          <h2 className="text-4xl font-bold text-blue-500">24/7</h2>
          <p className="text-gray-700 dark:text-gray-300">Service</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section
      id="error-page"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center"
    >
      {/* Content Container */}
      <div className="content text-center max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="header text-9xl font-bold text-blue-500 dark:text-blue-400 mb-4">
          404
        </h2>
        <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Sorry! Page not found
        </h4>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Oops! It seems like the page you're trying to access doesn't exist. If
          you believe there's an issue, feel free to report it, and we'll look
          into it.
        </p>

        {/* Buttons */}
        <div className="btns flex flex-col md:flex-row gap-4">
          <NavLink
            to="/"
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
          >
            Return Home
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

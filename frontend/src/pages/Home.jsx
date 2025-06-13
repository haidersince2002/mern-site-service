import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main>
        <section className="section-hero bg-gray-100 dark:bg-gray-900 py-16">
          <div className="w-[80%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="hero-content text-center md:text-left">
              <p className="text-blue-500 font-semibold text-lg mb-2">
                We are the World&apos;s Best IT Company
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Welcome to ServiceX
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At ServiceX, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group flex justify-center md:justify-start space-x-4">
                <NavLink to="/contact">
                  <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Connect Now
                  </button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn secondary-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
            {/* Hero Image */}
            <div className="hero-image flex justify-center">
              <img
                src="/images/home.png"
                alt="coding together"
                className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <Analytics />

      {/* Second Hero Section */}
      <section className="section-hero bg-gray-100 dark:bg-gray-900 py-16">
        <div className="w-[80%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Image */}
          <div className="hero-image flex justify-center order-2 md:order-1">
            <img
              src="/images/design.png"
              alt="coding together"
              className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
          {/* Hero Content */}
          <div className="hero-content text-center md:text-left order-1 md:order-2">
            <p className="text-blue-500 font-semibold text-lg mb-2">
              We are here to help you
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Get Started Today
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let&apos;s discuss how ServiceX can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group flex justify-center md:justify-start space-x-4">
              <NavLink to="/contact">
                <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Connect Now
                </button>
              </NavLink>
              <NavLink to="/services">
                <button className="btn secondary-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

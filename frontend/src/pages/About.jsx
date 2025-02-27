import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <main>
        <section className="section-hero bg-gray-100 dark:bg-gray-900 py-16">
          <div className="w-[80%] container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="hero-content text-center md:text-left">
              <p className="text-l mt-5 font-bold text-gray-800 dark:text-white mb-4">
                {user ? `Hi, ${user.username}` : `Welcome, to Haider Technical`}
              </p>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Why Choose Us?
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your
                specific needs and goals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group flex justify-center md:justify-start space-x-4">
                <NavLink to="/contact">
                  <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
                    Connect Now
                  </button>
                </NavLink>
                <button className="btn secondary-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image flex justify-center">
              <img
                src="/images/about.png"
                alt="coding buddies"
                className="w-full md:w-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Analytics Section */}
      <Analytics />
    </>
  );
};

export default About;

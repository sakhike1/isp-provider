// src/InternetHeroSection.js

import { motion } from 'framer-motion';
import gifa from "../assets/video/gifa.gif"; // Make sure this image is relevant to your service

const InternetHeroSection = () => {
  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-100 leading-tight mb-4">
              Fast & Reliable Internet for Everyone
            </h1>

            <p className="text-m text-gray-400 mb-8 max-w-md">
              Experience seamless connectivity with our fiber and LTE plans—perfect for homes and businesses alike.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-4 bg-indigo-600 text-white font-semibold rounded-xl 
                  shadow-xl shadow-indigo-300/50 hover:bg-indigo-700 
                  transition-all duration-300 ease-in-out 
                  transform hover:-translate-y-1 focus:outline-none 
                  focus:ring-4 focus:ring-indigo-300"
              >
                Get Started with Fiber
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-4 border-2 border-gray-100 
                  text-gray-100 font-semibold rounded-xl 
                  hover:border-gray-400 
                  transition-all duration-300 ease-in-out
                  flex items-center justify-center space-x-2"
              >
                <svg 
                  width="19" 
                  height="18" 
                  viewBox="0 0 19 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path 
                    d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                Speak to sales
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.img 
              src={gifa} 
              alt="Internet Service Provider Illustration"
              className="max-w-md rounded-2xl h-[400px] w-[800px] object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternetHeroSection;
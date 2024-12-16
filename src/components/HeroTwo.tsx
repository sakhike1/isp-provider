// src/HeroSection.js


import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-r from-black to-gray-800 text-white -mt-[100px] py-16">
      <div className="container mx-auto text-center px-4">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
        >
          Super-Fast Internet for Everyone
        </motion.h1>
        <p className="text-lg mb-8 text-gray-200">
          Choose from our range of Fibre and LTE packages tailored to your needs!
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              provider: 'Frogfoot',
              packages: [
                { speed: '60/30 Mbps', price: 'R665' },
                { speed: '120/60 Mbps', price: 'R897' },
                { speed: '240/120 Mbps', price: 'R1075' },
                { speed: '400/400 Mbps', price: 'R1472' },
                { speed: '1000/1000 Mbps', price: 'R1892' },
              ],
            },
            {
              provider: 'Vuma',
              packages: [
                { speed: '50/25 Mbps', price: 'R678' },
                { speed: '100/50 Mbps', price: 'R908' },
                { speed: '200/200 Mbps', price: 'R1254' },
                { speed: '500/200 Mbps', price: 'R1461' },
                { speed: '1000/250 Mbps', price: 'R1817' },
                { speed: '1000/500 Mbps', price: 'R2708' },
              ],
            },
            {
              provider: 'Metrofibre',
              packages: [
                { speed: '25/25 Mbps', price: 'R592' },
                { speed: '45/45 Mbps', price: 'R787' },
                { speed: '75/75 Mbps', price: 'R903' },
                { speed: '150/150 Mbps', price: 'R1018' },
                { speed: '250/250 Mbps', price: 'R1098' },
                { speed: '500/500 Mbps', price: 'R1593' },
                { speed: '1000/250 Mbps', price: 'R1662' },
              ],
            },
            {
              provider: 'Zoom',
              packages: [
                { speed: '20/20 Mbps', price: 'R368' },
                { speed: '30/30 Mbps', price: 'R552' },
                { speed: '50/50 Mbps', price: 'R788' },
                { speed: '100/100 Mbps', price: 'R1018' },
              ],
            },
          ].map((provider, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{provider.provider}</h2>
              <div className="flex-grow">
                <ul className="mb-4 space-y-2">
                  {provider.packages.map((pkg, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between text-gray-300 border-b border-white/20 pb-1"
                    >
                      <span>{pkg.speed}</span>
                      <span className="font-semibold">{pkg.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#3B3F42' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg 
                  transition duration-300 ease-in-out 
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
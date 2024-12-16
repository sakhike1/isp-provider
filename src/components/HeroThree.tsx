import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Wifi, 
  Download, 
  Users, 
  Globe, 
  Shield 
} from 'lucide-react';

const LtePricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const ltePackages = [
    { 
      speed: "10 Mbps", 
      price: "499", 
      features: [
        { icon: Users, text: "Up to 2 devices" },
        { icon: Download, text: "Social media browsing" },
        { icon: Globe, text: "Basic email & web" },
        { icon: Shield, text: "Standard security" }
      ],
      bestFor: "Light Users"
    },
    { 
      speed: "25 Mbps", 
      price: "699", 
      features: [
        { icon: Users, text: "Up to 4 devices" },
        { icon: Download, text: "Video calls" },
        { icon: Globe, text: "Smooth streaming" },
        { icon: Shield, text: "Enhanced security" }
      ],
      bestFor: "Remote Workers"
    },
    { 
      speed: "50 Mbps", 
      price: "899", 
      features: [
        { icon: Users, text: "Up to 6 devices" },
        { icon: Download, text: "Gaming & HD streaming" },
        { icon: Globe, text: "Multiple app usage" },
        { icon: Shield, text: "Advanced protection" }
      ],
      bestFor: "Gamers & Streamers"
    },
    { 
      speed: "100 Mbps", 
      price: "1,199", 
      features: [
        { icon: Users, text: "Unlimited devices" },
        { icon: Download, text: "4K streaming" },
        { icon: Globe, text: "Highest bandwidth" },
        { icon: Shield, text: "Premium security" }
      ],
      bestFor: "Power Users"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
    }
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <section className="bg-gradient-to-r from-black to-gray-800 py-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-white"
        >
          LTE Packages
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg mb-10 text-gray-300"
        >
          Choose the perfect LTE package for your connectivity needs.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ltePackages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`
                rounded-lg p-6 shadow-xl text-white 
                transition-all duration-300 cursor-pointer
                flex flex-col h-[500px] 
                ${selectedPackage === pkg 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white' 
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'}
              `}
              onClick={() => handlePackageSelect(pkg)}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <Wifi className="text-white" />
                  <h4 className="text-2xl font-semibold">{pkg.speed}</h4>
                </div>
                {selectedPackage === pkg && <CheckCircle className="text-green-400" />}
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-left">
                  <span className="text-sm text-gray-300">Best for</span>
                  <p className="text-xl font-semibold">{pkg.bestFor}</p>
                </div>
                <p className="text-4xl font-bold">R{pkg.price}</p>
              </div>
              
              <div className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center space-x-3">
                      <FeatureIcon size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-left">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Selected ${pkg.speed} package`);
                }}
              >
                <span>Choose Plan</span>
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-gray-900 rounded-lg p-6 text-white max-w-xl mx-auto"
          >
            <h4 className="text-2xl font-bold mb-4">Selected Package Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Speed:</strong> {selectedPackage.speed}</p>
              <p><strong>Price:</strong> R{selectedPackage.price}/mo</p>
              <p className="col-span-2"><strong>Best For:</strong> {selectedPackage.bestFor}</p>
              <p className="col-span-2"><strong>Features:</strong></p>
              <ul className="col-span-2 grid grid-cols-2 gap-2">
                {selectedPackage.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <li key={idx} className="flex items-center space-x-2">
                      <FeatureIcon size={16} className="text-blue-400" />
                      <span>{feature.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LtePricingSection;
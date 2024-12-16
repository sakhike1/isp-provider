import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Info, 
  Shield, 
  Clock, 
  DollarSign, 
  Router, 
  Headphones 
} from 'lucide-react';

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    { 
      title: "24/7 Support", 
      description: "We're here to help anytime.",
      details: "Our dedicated support team is available around the clock to address any concerns or questions you may have.",
      icon: Headphones
    },
    { 
      title: "Cost Saving", 
      description: "Affordable plans for everyone.",
      details: "Flexible pricing options designed to provide maximum value without breaking the bank.",
      icon: DollarSign
    },
    { 
      title: "No Contracts", 
      description: "Enjoy flexibility without commitment.",
      details: "Freedom to change or cancel your plan at any time with zero penalties.",
      icon: Shield
    },
    { 
      title: "Free Installation", 
      description: "Get connected with no installation fees.",
      details: "Professional installation included at no extra cost, ensuring a smooth setup process.",
      icon: Clock
    },
    { 
      title: "Free Router", 
      description: "Receive a free router with your plan.",
      details: "High-performance router provided to optimize your connectivity experience.",
      icon: Router
    }
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-7xl"
      >
        <h3 className="text-5xl font-bold mb-16 text-center text-white">
          Benefits & Features
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative w-full h-[400px] transform transition-all duration-300 
                  hover:scale-105 hover:z-10"
              >
                {/* Main Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-2xl border border-white/10 shadow-2xl 
                  flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-6 bg-blue-600/20 p-4 rounded-full">
                    <FeatureIcon 
                      size={48} 
                      className="text-blue-400 stroke-[1.5]" 
                    />
                  </div>
                  
                  <h4 className="font-semibold text-2xl mb-3 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 mb-4 text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Info Icon */}
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-4 right-4 text-white/50 hover:text-white"
                  >
                    <Info size={24} />
                  </motion.div>
                </div>

                {/* Hover Details */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 
                        rounded-2xl flex items-center justify-center p-6 text-center"
                    >
                      <p className="text-white text-sm leading-relaxed">
                        {feature.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
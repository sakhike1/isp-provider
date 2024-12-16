import React from 'react'
import { Wifi, Globe, Server } from 'lucide-react'
import gifa from "../assets/video/gifa.gif";

const Hero5 = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-75"></div>
      
      <div className="relative container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Wifi className="text-blue-500" size={24} />
              <span className="text-gray-400 font-medium">Ultra-Fast Connectivity</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="block">Blazing Fast</span>
              <span className="block text-blue-500 font-serif italic">LTE & Fiber</span>
              <span className="block">Internet Services</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 font-medium mb-10">
              Experience lightning-fast internet with our cutting-edge LTE and fiber optic networks. Reliable, high-speed connectivity for work, play, and everything in between.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#plans" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out group"
              >
                View Plans
                <Globe className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a 
                href="#coverage" 
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Check Coverage
                <Server className="ml-3" size={20} />
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full max-w-md relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl absolute inset-0 transform -rotate-6 scale-105 opacity-75"></div>
              <img 
                src={gifa} 
                alt="High-Speed Internet Network" 
                className="relative z-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero5
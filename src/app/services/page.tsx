"use client";

import { motion } from 'framer-motion';
import { dentalServices } from '@/lib/services';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F6F1E0] to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#54CAD3]/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-[#43444c] mb-6"
            >
              Our <span className="text-[#54CAD3]">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive dental care services designed to keep your smile healthy, beautiful, and confident
            </motion.p>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-20 w-20 h-20 bg-[#F5DBA3]/30 rounded-full blur-xl"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Complete Dental Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine check-ups to advanced treatments, we provide comprehensive dental services for the whole family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dentalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(84, 202, 211, 0.15)"
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#54CAD3]/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#43444c] mb-3 group-hover:text-[#54CAD3] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-[#54CAD3] hover:text-[#4299A3] font-medium text-sm cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are organized into different categories to help you find exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "General Dentistry",
                description: "Routine care including check-ups, cleanings, fillings, and preventive treatments",
                services: ["Dental Check-Up", "Teeth Cleaning", "Dental Filling", "Dental X-Rays"],
                color: "bg-[#54CAD3]"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Treatments focused on improving the appearance of your smile",
                services: ["Teeth Whitening", "Dental Crown", "Cosmetic Dentistry", "Dental Bridge"],
                color: "bg-[#F5DBA3] text-[#43444c]"
              },
              {
                title: "Specialized Care",
                description: "Advanced treatments for complex dental conditions and procedures",
                services: ["Root Canal Treatment", "Dental Implants", "Oral Surgery", "Emergency Care"],
                color: "bg-[#43444c]"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`${category.color} rounded-2xl p-8 text-white shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className={`mb-6 ${category.color.includes('F5DBA3') ? 'opacity-80' : 'text-white/90'}`}>
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service} className={`flex items-center space-x-2 ${category.color.includes('F5DBA3') ? 'text-[#43444c]' : 'text-white/80'}`}>
                      <span className="w-1.5 h-1.5 bg-current rounded-full" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#43444c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/appointment">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#54CAD3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4299A3] transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Ask Questions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
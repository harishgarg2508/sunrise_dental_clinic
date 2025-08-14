"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, Users, Award } from 'lucide-react';

export default function About() {
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
              About <span className="text-[#54CAD3]">Our Clinic</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our commitment to excellence in dental care. Explore the story behind our dedicated team and our mission to create healthier, happier smiles.
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
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-32 w-32 h-32 bg-[#54CAD3]/20 rounded-full blur-xl"
        />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#43444c] mb-8">Our Mission & Values</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#43444c] mb-2">Patient-Centered Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We prioritize your comfort and well-being, ensuring every visit is a positive experience tailored to your individual needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5DBA3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#43444c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#43444c] mb-2">Quality & Safety</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain the highest standards of quality and safety, using state-of-the-art equipment and following strict sterilization protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#43444c] mb-2">Team Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our experienced team continuously updates their skills and knowledge to provide you with the most advanced dental treatments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
                  alt="Modern dental office"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#54CAD3]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5DBA3]/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to transform dental care, our clinic has grown from a small practice into a comprehensive dental healthcare center. We believe that every patient deserves exceptional care in a comfortable, welcoming environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence in Care",
                description: "We've built our reputation on delivering outstanding results and maintaining the highest standards of dental care."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Focus",
                description: "We're proud to serve our local community, building lasting relationships with families across generations."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Modern Technology",
                description: "We invest in the latest dental technology to ensure our patients receive the most effective and comfortable treatments."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-[#54CAD3] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#43444c] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our skilled professionals are committed to providing you with personalized care and exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/doctors">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[#54CAD3] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4299A3] transition-colors duration-200"
              >
                <span>Meet Our Doctors</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied patients who trust us with their dental care. Schedule your appointment today.
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
              <Link href="/about-clinic">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Visit Our Clinic</span>
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
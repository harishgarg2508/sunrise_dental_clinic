"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { dentalServices, doctors } from '@/lib/services';

export default function Home() {
  const featuredServices = dentalServices.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#F6F1E0] to-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg")'
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Your Smile, 
              <span className="text-[#54CAD3]"> Our Priority</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Experience exceptional dental care with cutting-edge technology and compassionate treatment
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link href="/appointment">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#54CAD3] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4299A3] transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              
              <motion.a
                href="tel:7508574656"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
            </motion.div>
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
          className="absolute top-20 right-20 w-20 h-20 bg-[#F5DBA3]/20 rounded-full blur-xl"
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
          className="absolute bottom-32 left-32 w-32 h-32 bg-[#54CAD3]/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#43444c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Patients" },
              { icon: <Award className="w-8 h-8" />, number: "10+", label: "Years Experience" },
              { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Patient Rating" },
              { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Emergency Care" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[#54CAD3] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Our Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care tailored to your needs with state-of-the-art technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#43444c] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href="/services"
                  className="text-[#54CAD3] hover:text-[#4299A3] font-medium flex items-center space-x-1 transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[#54CAD3] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4299A3] transition-colors duration-200"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#43444c] mb-6">
                Excellence in <span className="text-[#54CAD3]">Dental Care</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Discover our commitment to excellence in dental care. Explore the story behind our dedicated team and our mission to create healthier, happier smiles for our community.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience and the latest technology, we provide comprehensive dental solutions in a comfortable, caring environment.
              </p>
              <Link href="/about-clinic">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-[#F5DBA3] text-[#43444c] px-6 py-3 rounded-full font-semibold hover:bg-[#F5DBA3]/80 transition-colors duration-200"
                >
                  <span>Learn More About Our Clinic</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg"
                  alt="Modern dental clinic interior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#54CAD3]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5DBA3]/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Meet Our Expert Doctors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team is dedicated to providing you with the highest quality dental care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-50 mx-auto rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#54CAD3] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#43444c] mb-2">{doctor.name}</h3>
                <p className="text-[#54CAD3] font-semibold mb-1">{doctor.qualification}</p>
                <p className="text-gray-600 mb-6">{doctor.specialization}</p>
                <Link href="/doctors">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-[#54CAD3] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4299A3] transition-colors duration-200"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Links */}
      <section className="py-20 bg-[#43444c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your journey to a healthier smile? Contact us today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                description: "Speak directly with our team",
                action: "Call Now",
                href: "tel:7508574656",
                color: "bg-blue-500 hover:bg-blue-600"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "WhatsApp Us",
                description: "Quick and convenient messaging",
                action: "Chat Now",
                href: "https://wa.me/917508574656",
                color: "bg-green-500 hover:bg-green-600"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                description: "Send us your questions",
                action: "Email Now",
                href: "mailto:sunrisedental817@gmail.com",
                color: "bg-red-500 hover:bg-red-600"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`block p-8 rounded-2xl text-center transition-all duration-300 ${contact.color}`}
              >
                <div className="mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-white/80 mb-4">{contact.description}</p>
                <span className="inline-flex items-center space-x-2 font-semibold">
                  <span>{contact.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
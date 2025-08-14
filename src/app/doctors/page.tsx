"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { doctors } from '@/lib/services';
import ContactTray from '@/components/ContactTray';
import { Phone, MessageCircle, Mail, Award, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Doctors() {
  const [contactTrayOpen, setContactTrayOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<
    { name: string; whatsapp: string; phone: string; email: string } | undefined
  >(undefined);

  const handleContactDoctor = (doctor: any) => {
    setSelectedDoctor(doctor);
    setContactTrayOpen(true);
  };

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
              Meet Our <span className="text-[#54CAD3]">Expert Doctors</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our experienced team of dental professionals is dedicated to providing you with exceptional care and outstanding results
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

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-[#F6F1E0] rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                {/* Doctor Image */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-48 h-70 mx-auto rounded-full object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Doctor Info */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#43444c] mb-2">{doctor.name}</h2>
                  <p className="text-[#54CAD3] font-semibold text-lg mb-2">{doctor.qualification}</p>
                  <p className="text-gray-600 text-lg">{doctor.specialization}</p>
                </div>

                {/* Doctor Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#54CAD3]" />
                    <span>Practicing at Sunrise Dental Clinic</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-[#54CAD3]" />
                    <span>Available: Mon-Sat (9 AM - 8 PM)</span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#43444c] mb-4 text-center">Specializations</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "General Dentistry",
                      "Cosmetic Procedures", 
                      "Root Canal Treatment",
                      "Dental Implants"
                    ].map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-[#54CAD3]/10 text-[#54CAD3] text-sm rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <motion.button
                  onClick={() => handleContactDoctor(doctor)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#54CAD3] to-[#4299A3] text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact {doctor.name.split(' ')[1]}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Why Choose Our Doctors?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dental professionals bring years of experience, advanced training, and a commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Qualifications",
                description: "BDS certified with specialized training in modern dental techniques"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Personalized Care",
                description: "Individual attention and customized treatment plans for every patient"
              },
              {
                icon: "🎯",
                title: "Latest Technology",
                description: "Using state-of-the-art equipment for precise and comfortable treatments"
              },
              {
                icon: "💼",
                title: "Years of Experience",
                description: "Extensive experience treating diverse dental conditions and procedures"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-[#54CAD3] mb-4 flex justify-center text-4xl">
                  {typeof feature.icon === 'string' ? feature.icon : feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#43444c] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Meet Our Doctors?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our experienced dental professionals and start your journey to optimal oral health.
            </p>
            <Link href="/appointment">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-[#54CAD3] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4299A3] transition-colors duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Tray */}
      <ContactTray
        type="doctor"
        doctorData={selectedDoctor}
        isOpen={contactTrayOpen}
        onClose={() => setContactTrayOpen(false)}
      />
    </div>
  );
}
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutClinic() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const clinicImages = [
    {
      src: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg",
      alt: "Modern dental clinic reception area"
    },
    {
      src: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
      alt: "Dental treatment room with modern equipment"
    },
    {
      src: "https://images.pexels.com/photos/4269724/pexels-photo-4269724.jpeg",
      alt: "Sterilization room with advanced equipment"
    },
    {
      src: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg",
      alt: "Comfortable waiting area"
    },
    {
      src: "https://images.pexels.com/photos/4269724/pexels-photo-4269724.jpeg",
      alt: "Advanced dental chair and equipment"
    },
    {
      src: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
      alt: "Clean and modern clinic interior"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(clinicImages[index]);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % clinicImages.length
      : (currentImageIndex - 1 + clinicImages.length) % clinicImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(clinicImages[newIndex]);
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
              About Our <span className="text-[#54CAD3]">Clinic</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Visit our modern, state-of-the-art dental facility designed for your comfort and optimal care
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

      {/* Clinic Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#43444c] mb-8 flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-[#54CAD3]" />
                <span>Our Location</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#43444c] mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gali No 7, Near Shishu Niketan School,<br />
                    Nayagaon, Chandigarh, Punjab 160103
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#43444c] mb-2">Easy to Find</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our clinic is conveniently located near Shishu Niketan School in Nayagaon, making it easily accessible by public transport and private vehicles. Ample parking space is available for our patients.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:7508574656"
                    className="flex items-center justify-center space-x-2 bg-[#54CAD3] text-white px-6 py-3 rounded-lg hover:bg-[#4299A3] transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call for Directions</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Sunrise+Dental+Clinic+and+Implant+centre,+Nayagaon,+Chandigarh,+Punjab+160103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white border-2 border-[#54CAD3] text-[#54CAD3] px-6 py-3 rounded-lg hover:bg-[#54CAD3] hover:text-white transition-all duration-200"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.7284190644693!2d76.78960138346214!3d30.78103614984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff3c6b2600b4b%3A0xc99d5c307bcfa5e0!2sSunrise%20dental%20clinic%20and%20implant%20centre!5e0!3m2!1sen!2sin!4v1755192576227!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#54CAD3]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5DBA3]/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className="py-20 bg-[#F6F1E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6 flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-[#54CAD3]" />
              <span>Clinic Hours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're open six days a week to serve you with flexible morning and evening schedules
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-lg font-semibold text-[#43444c]">Monday - Saturday</span>
                  <div className="text-right">
                    <div className="text-[#54CAD3] font-semibold">Morning: 9:00 AM - 2:00 PM</div>
                    <div className="text-[#54CAD3] font-semibold">Evening: 3:00 PM - 8:00 PM</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-semibold text-[#43444c]">Sunday</span>
                  <span className="text-gray-500 font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#54CAD3]/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> We are closed for lunch break from 2:00 PM to 3:00 PM. 
                  For emergency cases outside clinic hours, please call our emergency number.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#43444c] mb-6">Clinic Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern, clean, and comfortable dental facility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer relative group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm text-gray-600">{image.alt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
              {currentImageIndex + 1} / {clinicImages.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
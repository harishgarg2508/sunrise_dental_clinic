"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Book Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Clinic', href: '/about-clinic' },
  ];

  return (
    <footer className="bg-[#43444c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#4299A3] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🦷</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dr. Suraj Sharma</h3>
                  <p className="text-[#F5DBA3]">Dental Clinic</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your smile is our priority. We provide comprehensive dental care with the latest technology and a caring approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#54CAD3]" />
                <span className="text-sm">Gali No 7, Near Shishu Niketan School, Nayagaon, Chandigarh, Punjab 160103</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#54CAD3]" />
                <div className="space-x-4">
                  <span className="text-sm">75085 74656</span>
                  <span className="text-sm">+91 1604 01 3517</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#54CAD3]" />
                <span className="text-sm">sunrisedental817@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#54CAD3]" />
                <div>
                  <p className="text-sm">Morning: 9:00 AM – 2:00 PM</p>
                  <p className="text-sm">Evening: 3:00 PM – 8:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#F5DBA3]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#54CAD3] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#F5DBA3]">Emergency Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:7508574656"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#54CAD3] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call: 75085 74656</span>
              </a>
              <a
                href="https://wa.me/917508574656"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#54CAD3] transition-colors duration-200"
              >
                <span className="text-lg">📱</span>
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-600 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Dr. Suraj Sharma | All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
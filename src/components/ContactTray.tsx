"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Mail, Globe, Twitter, Linkedin } from 'lucide-react';

interface ContactTrayProps {
  type: 'doctor' | 'developer';
  doctorData?: {
    name: string;
    whatsapp: string;
    phone: string;
    email: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ContactTray = ({ type, doctorData, isOpen, onClose }: ContactTrayProps) => {
  const developerData = {
    whatsapp: "https://wa.me/7876215235", // Placeholder
    website: "https://harishgarg.tech", // Placeholder
    twitter: "https://linkedin.com/in/harishgarg2508", // Placeholder
    linkedin: "https://linkedin.com/in/harishgarg2508", // Placeholder
  };

  const contacts = type === 'doctor' && doctorData ? [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: doctorData.whatsapp,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      href: doctorData.phone,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: doctorData.email,
      color: 'bg-red-500 hover:bg-red-600'
    }
  ] : [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: developerData.whatsapp,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      href: developerData.website,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: developerData.twitter,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: developerData.linkedin,
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Tray */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#43444c]">
                Contact {type === 'doctor' ? (doctorData?.name || 'Doctor') : 'Developer'}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Contact Options */}
            <div className="flex-1 p-6">
              <p className="text-gray-600 mb-6 text-sm">
                Choose your preferred way to get in touch
              </p>
              
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-3 p-4 rounded-lg text-white transition-all duration-200 ${contact.color}`}
                  >
                    {contact.icon}
                    <span className="font-medium">{contact.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                We'll get back to you as soon as possible
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactTray;
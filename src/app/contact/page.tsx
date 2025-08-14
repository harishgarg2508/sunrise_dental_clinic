"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactTray from '@/components/ContactTray';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User } from 'lucide-react';

export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = { type: 'success' | 'error'; message: string } | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [developerTrayOpen, setDeveloperTrayOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitToWeb3Forms = async (data: any) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
        subject: `Contact Form - ${data.subject}`,
        from_name: data.name,
        from_email: data.email,
        message: `Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}`
      }),
    });

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitToWeb3Forms(contactFormData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });

      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    }

    setIsSubmitting(false);
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
              Get in <span className="text-[#54CAD3]">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We're here to help! Reach out to us with any questions, concerns, or to schedule your appointment
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

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-[#F6F1E0] rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-[#43444c] mb-8 flex items-center space-x-3">
                <Send className="w-8 h-8 text-[#54CAD3]" />
                <span>Send us a Message</span>
              </h2>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                      <User className="w-5 h-5 text-[#54CAD3]" />
                      <span>Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                      <Mail className="w-5 h-5 text-[#54CAD3]" />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#43444c] font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-[#43444c] font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactFormData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#54CAD3] to-[#4299A3] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#43444c] mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#43444c] mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Gali No 7, Near Shishu Niketan School,<br />
                        Nayagaon, Chandigarh, Punjab 160103
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#43444c] mb-1">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:7508574656" className="block text-gray-600 hover:text-[#54CAD3] transition-colors duration-200">
                          75085 74656
                        </a>
                        <a href="tel:+911604013517" className="block text-gray-600 hover:text-[#54CAD3] transition-colors duration-200">
                          +91 1604 01 3517
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#43444c] mb-1">Email</h4>
                      <a 
                        href="mailto:sunrisedental817@gmail.com"
                        className="text-gray-600 hover:text-[#54CAD3] transition-colors duration-200"
                      >
                        sunrisedental817@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#54CAD3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#43444c] mb-1">Clinic Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Morning: 9:00 AM – 2:00 PM</p>
                        <p>Evening: 3:00 PM – 8:00 PM</p>
                        <p className="text-sm text-gray-500">Monday - Saturday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#43444c]">Quick Contact</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.a
                    href="https://wa.me/917508574656"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl flex items-center space-x-3 transition-colors duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Quick messaging</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:7508574656"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl flex items-center space-x-3 transition-colors duration-200"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Call Now</div>
                      <div className="text-sm opacity-90">Speak directly</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Developer Contact */}
              <div className="bg-[#F6F1E0] rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#43444c] mb-4">Website Support</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Need help with the website or have technical questions?
                </p>
                <motion.button
                  onClick={() => setDeveloperTrayOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#43444c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#43444c]/90 transition-colors duration-200"
                >
                  Contact Developer
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Contact Tray */}
      <ContactTray
        type="developer"
        isOpen={developerTrayOpen}
        onClose={() => setDeveloperTrayOpen(false)}
      />
    </div>
  );
}
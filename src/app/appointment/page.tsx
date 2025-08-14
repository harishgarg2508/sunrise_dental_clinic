"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = { type: 'success' | 'error'; message: string } | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateMobile = (mobile: string) => {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(mobile);
  };

  const checkSlotAvailability = async (date: string, time: string) => {
    try {
      const appointmentsRef = collection(db, 'appointments');
      const q = query(
        appointmentsRef,
        where('date', '==', date),
        where('time', '==', time)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.empty;
    } catch (error) {
      console.error('Error checking slot availability:', error);
      return true; // Assume available if check fails
    }
  };

  const submitToWeb3Forms = async (data: any) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
        subject: 'New Appointment Booking - Dr. Suraj Sharma Dental Clinic',
        from_name: 'Dental Clinic Website',
        ...data,
        message: `New appointment booking:
        
Name: ${data.name}
Mobile: ${data.mobile}
Date: ${data.date}
Time: ${data.time}

Please confirm the appointment with the patient.`
      }),
    });

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form data
    if (!formData.name || !formData.mobile || !formData.date || !formData.time) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      setIsSubmitting(false);
      return;
    }

    if (!validateMobile(formData.mobile)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid Indian mobile number'
      });
      setIsSubmitting(false);
      return;
    }

    // Check if date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a date from today onwards'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Check slot availability
      const isAvailable = await checkSlotAvailability(formData.date, formData.time);
      
      if (!isAvailable) {
        setSubmitStatus({
          type: 'error',
          message: 'This time slot is already booked. Please choose another time.'
        });
        setIsSubmitting(false);
        return;
      }

      // Save to Firebase
      await addDoc(collection(db, 'appointments'), {
        name: formData.name,
        mobile: formData.mobile,
        date: formData.date,
        time: formData.time,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });

      // Submit to Web3Forms
      await submitToWeb3Forms(formData);

      setSubmitStatus({
        type: 'success',
        message: 'Appointment booked successfully! We will contact you soon to confirm.'
      });

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        date: '',
        time: ''
      });

    } catch (error) {
      console.error('Error booking appointment:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to book appointment. Please try again or call us directly.'
      });
    }

    setIsSubmitting(false);
  };

  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

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
              Book Your <span className="text-[#54CAD3]">Appointment</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Schedule your visit with our expert dental team. We'll take care of your smile with personalized, professional care.
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

      {/* Appointment Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-[#F6F1E0] rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-[#43444c] mb-8 flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-[#54CAD3]" />
                <span>Schedule Appointment</span>
              </h2>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                    <User className="w-5 h-5 text-[#54CAD3]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                    <Phone className="w-5 h-5 text-[#54CAD3]" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    pattern="[6-9][0-9]{9}"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                    placeholder="Enter 10-digit mobile number"
                  />
                  <p className="text-sm text-gray-500 mt-1">Format: 9876543210</p>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                    <Calendar className="w-5 h-5 text-[#54CAD3]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={minDate}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-[#43444c] font-semibold mb-2">
                    <Clock className="w-5 h-5 text-[#54CAD3]" />
                    <span>Preferred Time *</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54CAD3] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
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
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            </motion.div>

            {/* Clinic Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Clinic Hours */}
              <div className="bg-[#54CAD3] text-white rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6" />
                  <span>Clinic Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Evening</span>
                    <span className="font-semibold">3:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-white/80">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#43444c] mb-4">Emergency Contact</h3>
                <p className="text-gray-600 mb-4">
                  For dental emergencies outside clinic hours, please call:
                </p>
                <a
                  href="tel:7508574656"
                  className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>75085 74656</span>
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-[#F6F1E0] rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-[#43444c] mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54CAD3] font-bold">•</span>
                    <span>Comprehensive consultation with our experienced dentist</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54CAD3] font-bold">•</span>
                    <span>Digital X-rays if required for accurate diagnosis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54CAD3] font-bold">•</span>
                    <span>Personalized treatment plan discussion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54CAD3] font-bold">•</span>
                    <span>Clean, comfortable environment with modern equipment</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
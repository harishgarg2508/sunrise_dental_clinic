import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Dr. Suraj Sharma - Dental Clinic | Professional Dental Care in Chandigarh',
  description: 'Professional dental care by Dr. Suraj Sharma and Dr. Karuna Sharma. Comprehensive dental services including check-ups, cleanings, implants, and cosmetic dentistry in Chandigarh.',
  keywords: 'dental clinic, dentist, dental care, teeth cleaning, dental implants, root canal, Chandigarh, Punjab',
  openGraph: {
    title: 'Dr. Suraj Sharma - Dental Clinic',
    description: 'Professional dental care with modern technology and caring approach',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
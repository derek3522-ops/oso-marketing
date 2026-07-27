import './globals.css';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const metadata = {
  title: 'OSO ATM - Full-Service ATM Company',
  description: 'OSO ATM is a full-service ATM company dedicated to offering the best customer service and superior products in the industry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <nav>
              <Link href="/" className="text-gray-400 hover:text-oso-orange font-bold">HOME</Link>
              <Link href="/about" className="text-gray-400 hover:text-oso-orange font-bold">ABOUT US</Link>
              <Link href="/contact" className="text-gray-400 hover:text-oso-orange font-bold">CONTACT</Link>
              <div className="mx-4 text-gray-600">
                <svg className="w-12 h-12 inline" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                  <text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="40" fontWeight="bold">OSO</text>
                </svg>
              </div>
              <Link href="/atms" className="text-oso-orange hover:text-orange-600 font-bold">ATMS</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="container">
            <div className="mb-4">
              <svg className="w-16 h-16 inline" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#FF7A3D" strokeWidth="2" />
                <text x="50" y="60" textAnchor="middle" fill="#FF7A3D" fontSize="40" fontWeight="bold">OSO</text>
              </svg>
            </div>
            <div className="contact-info">
              <p className="text-oso-orange font-bold mb-2">866-OSO-ATM1</p>
              <p className="text-oso-orange font-bold mb-2">sales@osoatm.com</p>
              <p>Scottsdale, AZ</p>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
            <p className="text-gray-600 text-sm mt-4">© Copyright 2024 OSO ATM | All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

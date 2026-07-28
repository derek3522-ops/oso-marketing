import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'OSO ATM - Full-Service ATM Company',
  description: 'OSO ATM is a full-service ATM company dedicated to offering the best customer service and superior products in the industry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <header className="border-b-4 border-oso-orange" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,122,61,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(255,122,61,0.15) 100%)', backgroundColor: '#0a0a0a'}}>
          <div className="container">
            <nav>
              <Link href="/" className="text-gray-400 hover:text-oso-orange font-bold">HOME</Link>
              <Link href="/about" className="text-gray-400 hover:text-oso-orange font-bold">ABOUT US</Link>
              <div className="mx-4">
                <img 
                  src="/oso-atm-logo-header.png" 
                  alt="OSO ATM" 
                  className="h-16 w-auto"
                />
              </div>
              <Link href="/contact" className="text-gray-400 hover:text-oso-orange font-bold">CONTACT</Link>
              <Link href="/atms" className="text-oso-orange hover:text-orange-600 font-bold">ATMS</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="container text-center">
           <div className="mb-4 flex justify-center">
              <img 
                src="/OSO-ATM-Footer.png" 
                alt="OSO ATM" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-oso-orange font-bold mb-1">866-OSO-ATM1</p>
            <p className="text-oso-orange font-bold mb-1">sales@osoatm.com</p>
            <p className="text-gray-600 text-sm">© Copyright 2024 OSO ATM | All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

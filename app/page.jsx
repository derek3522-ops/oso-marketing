import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-oso-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-oso-dark to-black">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-oso-orange">Welcome to OSO ATM</h1>
              <p className="text-gray-300 mb-4 text-lg">
                OSO ATM is a full-service ATM company dedicated to offering the best customer service and superior products in the industry.
              </p>
              <p className="text-gray-400 mb-8">
                OSO ATM combines industry knowledge, superior service and state of the art equipment to help earn the most revenue for your ATM locations. With 50+ years of collective experience in ATM sales, service, banking and mobile ATM placement, OSO can assist with every aspect of the ATM industry.
              </p>
              <Link href="/contact" className="btn-primary inline-block">CONTACT US</Link>
            </div>
            <div className="bg-gray-800 rounded p-4 h-96 flex items-center justify-center">
              <p className="text-gray-500">[ATM Image Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-oso-orange">OSO Offers:</h2>
          <div className="grid grid-cols-2 gap-12">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>ATM Processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>ATM Equipment sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Customized ATM Branding</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Vault Cash Sourcing</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Equipment financing</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>First and Second line maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Billing and payment</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>ATM Marketing</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>ATM Business Consulting</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Turnkey ATM placement</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>Mobile ATMs</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>24hr ATM Monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-oso-orange mr-3">•</span>
                <span>ATM Protection – Custom ATM enclosures to help protect your investment</span>
              </li>
            </ul>
          </div>
          <p className="text-oso-orange text-2xl font-bold mt-12">
            Let OSO help you run your ATM business more effectively!
          </p>
        </div>
      </section>

      {/* Why OSO Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-oso-orange">WHY OSO ATM</h2>
          <p className="text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            We help companies manage their ATMs, kiosks, cash and electronic payments. We provide installation, data processing, on-site training, web-based reporting, real-time monitoring and back-end administrative support.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Transaction Processing</h3>
              <p className="text-gray-400">Fast, Reliable and Automatic</p>
            </div>
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Installation Experts</h3>
              <p className="text-gray-400">Professional Setup</p>
            </div>
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Administration</h3>
              <p className="text-gray-400">Streamlined Operations</p>
            </div>
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Local Technicians</h3>
              <p className="text-gray-400">Expert Support</p>
            </div>
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Real-time Data</h3>
              <p className="text-gray-400">Live Monitoring</p>
            </div>
            <div className="text-center">
              <h3 className="text-oso-orange text-lg font-bold mb-2">Armored Transport</h3>
              <p className="text-gray-400">Secure Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

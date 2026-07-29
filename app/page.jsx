import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-oso-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-oso-dark to-black">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-oso-orange">Welcome To OSO ATM</h1>
              <p className="text-gray-300 mb-4 text-lg">
                OSO ATM Is A Full-Service ATM Provider Committed To Delivering Exceptional Customer Service And Top-Quality Equipment
              </p>
              <p className="text-gray-400 mb-8">
                We Combine Deep Industry Expertise With Cutting-Edge Technology To Help Maximize Revenue At Every ATM Location. With Over 50 Years Of Combined Experience In ATM Sales, Service, Banking, And Mobile ATM Placement, Our Team Is Equipped To Support You At Every Stage
              </p>
              <p className="text-gray-400 mb-8">
                From Installation To Ongoing Support, OSO ATM Is Your Trusted Partner In The ATM Industry
              </p>
              <Link href="/contact" className="btn-primary inline-block">CONTACT US</Link>
            </div>
            <div className="rounded overflow-hidden h-screen">
              <img 
                src="/2atms.png" 
                alt="OSO ATM Machines" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
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

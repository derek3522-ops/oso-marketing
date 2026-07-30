import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-oso-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-oso-dark to-black">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[100px]" />
        </div>

        {/* Faded grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at 30% 50%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black, transparent 75%)',
          }}
        />

        {/* Chevron texture */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #f97316 0px, #f97316 2px, transparent 2px, transparent 22px)',
            maskImage: 'linear-gradient(to bottom, transparent, black 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 60%)',
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            <div className="relative rounded overflow-hidden h-[500px] lg:h-[600px]">
              <img
                src="/2atms.png"
                alt="OSO ATM Machines"
                className="w-full h-full object-contain"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why OSO Section */}
      <section className="relative py-20 bg-black border-t border-orange-500/10">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-oso-orange">WHY OSO ATM</h2>
          <p className="text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            We help companies manage their ATMs, kiosks, cash and electronic payments. We provide installation, data processing, on-site training, web-based reporting, real-time monitoring and back-end administrative support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

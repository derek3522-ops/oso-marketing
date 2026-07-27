export default function About() {
  return (
    <div className="bg-oso-dark min-h-screen">
     <section 
        className="py-20 bg-cover relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(/Bear_Background.png)',
          backgroundPosition: 'right center',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-oso-orange via-oso-orange to-transparent opacity-85"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 text-white">ABOUT OSO ATM</h1>
            <div className="space-y-4 text-white">
              <p>
                OSO ATM is nationwide ATM company providing ATM service to customers in all 50 states. OSO is dedicated to serving our customers, distributors, ATM affiliates with the most competitive pricing and service to help maximize profits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Honesty and transparency</strong> – with over a 99.5% retention rate, OSO has built a reputation of trust and honesty in this industry.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Service</strong> – we offer 24-hour tech support and online tools to help manage your business more efficiently
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    Not just another company, but a partner helping you grow your business.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

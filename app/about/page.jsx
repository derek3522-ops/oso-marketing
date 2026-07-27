export default function About() {
  return (
    <div className="bg-oso-dark min-h-screen">
      <section className="py-20 bg-gradient-to-r from-oso-orange to-orange-600">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="bg-gray-700 rounded h-96 flex items-center justify-center">
              <p className="text-gray-400">[Bear Image Placeholder]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
                OSO ATM Is A Nationwide ATM Company Providing ATM Services To Customers In All 50 States. OSO Is Dedicated To Serving Our Customers, Distributors, And ATM Affiliates With The Most Competitive Pricing And Service To Help Maximize Profits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Honesty And Transparency</strong> – With Over A 99.5% Retention Rate, OSO Has Built A Reputation Of Trust And Honesty In This Industry
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Service</strong> – We Offer Unmatched Tech Support And Online Tools To Help Manage Your Business More Efficiently
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Growth</strong> – Not Just Another Company, But A Partner Helping You To Grow Your Business
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

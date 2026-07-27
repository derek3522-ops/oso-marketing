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
        
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 text-white">ABOUT OSO ATM</h1>
            <div className="space-y-4 text-white">
              <p>
                OSO ATM Is A Nationwide ATM Provider Delivering Reliable, High-Performance ATM Services Across All 50 States. We Are Committed To Supporting Our Customers, Distributors, And Affiliates With Competitive Pricing, Cutting-Edge Tools, And Exceptional Service—Helping You Maximize Profitability And Grow With Confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Honesty & Transparency</strong> – With A 99.5%+ Retention Rate, OSO Has Earned A Reputation Built On Trust, Integrity, And Long-Term Partnerships
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Unmatched Service</strong> – Our 24/7 Technical Support And Powerful Online Management Tools Make Running Your ATM Business Simple And Efficient
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>
                    <strong>Growth-Focused Partnership</strong> – We’re More Than A Provider—We’re A Partner Dedicated To Helping You Scale And Succeed
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

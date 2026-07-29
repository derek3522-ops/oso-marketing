'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-oso-dark min-h-screen">
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(/BearRoar.png)',
          backgroundSize: 'cover',
          backgroundPosition: '60% 40%',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {/* Form */}
            <div className="col-span-2">
              <h1 className="text-4xl font-bold mb-4 text-white">Contact us!</h1>
              <p className="text-white mb-8">Please fill out the form below.</p>

              {submitted && (
                <div className="bg-green-500 text-white p-4 rounded mb-6">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                ></textarea>
                <button type="submit" className="btn-primary">
                  SEND
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded p-8 h-fit">
              <h3 className="text-lg font-bold text-black mb-6">General Enquiries</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-oso-orange mr-3" size={20} />
                  <a href="tel:8666724861" className="text-oso-orange font-bold hover:text-orange-600">
                    866-OSO-ATM1
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-oso-orange mr-3" size={20} />
                  <a href="mailto:sales@osoatm.com" className="text-oso-orange font-bold hover:text-orange-600">
                    sales@osoatm.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

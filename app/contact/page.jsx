'use client';

import { useState } from 'react';

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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="bg-oso-dark">
      <section className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="/BearRoar.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.5)', transformOrigin: 'left center' }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-oso-orange">Contact Us!</h1>
              <p className="text-white mb-8">Please Fill Out The Form Below</p>

              {submitted && (
                <div className="bg-green-600 text-white p-4 rounded mb-6">
                  Thank You! We&apos;ll Be In Touch Soon
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    aria-label="First name"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    aria-label="Last name"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    aria-label="Phone number"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    aria-label="Email address"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  aria-label="Message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white text-black px-4 py-3 rounded placeholder-gray-500"
                />
                <button type="submit" className="btn-primary">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

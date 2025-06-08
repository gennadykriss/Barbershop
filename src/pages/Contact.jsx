// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaBuilding, FaClock } from 'react-icons/fa'

export default function Contact() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    e.target.reset()
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <section id="contact" className="relative bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-4">
            <span className="block w-12 h-1 bg-[#FDD28A] rounded-full" />
          </div>
          <h2 className="text-4xl uppercase font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-white/80">
            Feel free to both ask questions and send business inquiries.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <FaEnvelope className="text-[#FDD28A] mt-1" />
              <span>dgscuts@gmail.com</span>
            </li>
            <li className="flex items-start space-x-4">
              <FaPhone className="text-[#FDD28A] mt-1" />
              <span>613-000-0000</span>
            </li>
            <li className="flex items-start space-x-4">
              <FaBuilding className="text-[#FDD28A] mt-1" />
              <div>
                <p className="uppercase text-sm">Our Address</p>
                <p>75 Laurier Ave East</p>
                <p>Ottawa, ON K1N 6N5</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaClock className="text-[#FDD28A] mt-1" />
              <div>
                <p className="uppercase text-sm">Opening Hours</p>
                <p>Monday: Closed</p>
                <p>Tuesday: 10am–6pm</p>
                <p>Wednesday–Saturday: 10am–8pm</p>
                <p>Sunday: 11am–5pm</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-gray-900 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+123123123"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FDD28A] text-black py-3 rounded-full font-medium hover:bg-[#e0c07a] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-xs text-center">
            <h3 className="text-2xl font-bold text-[#FDD28A] mb-2">Success!</h3>
            <p className="mb-4 text-white/80">Your message has been sent.</p>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-2 bg-[#FDD28A] text-black rounded-full font-medium hover:bg-[#e0c07a] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

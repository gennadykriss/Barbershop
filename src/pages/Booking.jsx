// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react'

const services = [
  "Men's Haircut $29.90",
  'Skin Fade $31.50',
  "Men's Haircut & Beard $37.50",
  'Kids Haircut Under 13 $25.85',
  'Eyebrow Trim $15.00',
  "Women's Haircut $40.00",
  'Braids & Twists $55.00',
  'Beard Trim $20.00',
  'Neck Trim $10.00',
]


export default function Booking() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // send booking data to backend
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
    <section id="book" className="relative bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* — LEFT: intro */}
        <div>
          <div className="mb-4">
            <span className="block w-12 h-1 bg-[#FDD28A] rounded-full" />
          </div>
          <h2 className="text-4xl uppercase font-bold mb-4">Book a Haircut</h2>
          <p className="mb-8 text-white/80">
            Choose your service, pick a date & time, and we’ll have you looking sharp.
          </p>
        </div>

        <div>
          <div className="bg-gray-900 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="service" className="block mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Anything else we should know?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FDD28A] text-black py-3 rounded-full font-medium hover:bg-[#e0c07a] transition"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-xs text-center">
            <h3 className="text-2xl font-bold text-[#FDD28A] mb-2">
              Success!
            </h3>
            <p className="mb-4 text-white/80">
              Your booking request has been sent.
            </p>
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

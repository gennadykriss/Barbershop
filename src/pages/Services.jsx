// src/pages/Services.jsx
import React, { useState } from 'react'

const quickServices = [
  {
    price: '$29.90',
    title: "MEN'S HAIRCUT",
    description:
      'A fresh cut that suits your lifestyle, refined, timeless, and designed to leave a lasting impression. Tailored precision for the modern gentleman.',
  },
  {
    price: '$31.50',
    title: 'SKIN FADE',
    description:
      'From skin to style with flawless transition. This sharp, detailed fade delivers a sleek, bold finish that speaks confidence without saying a word.',
  },
  {
    price: '$37.50',
    title: "MEN'S HAIRCUT & BEARD",
    description:
      'Sharp lines meet well-groomed definition. A complete grooming session for hair and beard that keeps you looking polished from every angle.',
  },
  {
    price: '$25.85',
    title: 'KIDS HAIRCUT UNDER 13',
    description:
      'Fun, fresh, and age-perfect styles for young legends. Easygoing cuts with care and attention, zero stress, all style.',
  },
]

const fullServices = [
  ...quickServices,
  { price: '$15.00', title: 'EYEBROW TRIM', description: 'Clean up your brows for that polished look.' },
  { price: '$40.00', title: "WOMEN'S HAIRCUT", description: 'Stylish cuts tailored to your taste and hair type.' },
  { price: '$55.00', title: 'BRAIDS & TWISTS', description: 'Expert braiding and twisting for any length and style.' },
  { price: '$20.00', title: 'BEARD TRIM', description: 'Shape and detail your beard to perfection.' },
  { price: '$10.00', title: 'NECK TRIM', description: 'Crisp lines at the nape for a clean finish.' },
]

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="services" className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <span className="block w-12 h-1 bg-blue-600" />
          <span className="block w-12 h-1 bg-gray-300" />
          <span className="block w-12 h-1 bg-red-700" />
          <span className="block w-12 h-1 bg-blue-600" />
          <span className="block w-12 h-1 bg-red-700" />
          <span className="block w-12 h-1 bg-gray-300" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold uppercase text-center mb-12">
          SERVICES
        </h2>

        <div className="space-y-12">
          {quickServices.map((svc, idx) => (
            <div key={idx}>
              <div className="flex items-baseline space-x-4">
                <span className="text-[#D4AF37] text-2xl font-semibold">
                  {svc.price}
                </span>
                <h3 className="text-xl font-medium uppercase">{svc.title}</h3>
              </div>
              <p className="mt-2 max-w-prose">{svc.description}</p>
              {idx < quickServices.length - 1 && (
                <hr className="border-gray-500 my-8" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
          <p className="text-[#D4AF37] mb-4">Need Something Else?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            View Full Service List
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-2xl max-h-full overflow-y-auto p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold uppercase mb-6 text-center">
              Full Service List
            </h3>
            <div className="space-y-6">
              {fullServices.map((svc, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#D4AF37] text-xl font-semibold">
                      {svc.price}
                    </span>
                    <h4 className="text-lg font-medium uppercase">
                      {svc.title}
                    </h4>
                  </div>
                  <p className="mt-1 text-white/80">{svc.description}</p>
                  {idx < fullServices.length - 1 && (
                    <hr className="border-gray-700 my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

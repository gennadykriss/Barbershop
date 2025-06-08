// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="flex justify-center mb-6">
        <span className="block w-20 h-1 bg-[#D4AF37] rounded-full" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center">
        Page Not Found
      </h1>

      <p className="mt-4 text-gray-300 text-center">
        Page was moved or doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-full font-medium 
                   hover:bg-[#c39b30] transition"
      >
        Go to homepage
      </Link>

      <hr className="absolute bottom-0 left-0 w-full border-gray-800" />
    </section>
  )
}

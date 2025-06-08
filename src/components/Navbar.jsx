import Logo from '../assets/Logo.png'  // ← put your SVG/PNG in src/assets
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 filter"
          />
          <span className="ml-3 text-2xl font-gravitas">
            DG&apos;s CUTS
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <Link to="/gallery" className="hover:text-gray-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Link
          to="/book"
          className="hidden md:inline-block px-5 py-2 border border-white rounded-full
                     hover:bg-white hover:text-black transition"
        >
          Book a Haircut
        </Link>
      </div>
    </nav>
  )
}

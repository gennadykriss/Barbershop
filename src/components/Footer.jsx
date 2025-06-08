// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const navLinks = [
  { to: '/',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/gallery', label: 'Testimonials' },
  { to: '/contact',   label: 'Contact' },
  { to: '/404',       label: '404 Page' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <hr className="border-gray-800" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <nav className="flex justify-center">
          <ul className="space-y-3 text-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-gray-300 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center md:justify-end">
          <a
            href="https://instagram.com/hair_cutting_artist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <hr className="border-gray-800" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <div>© 2025 DG&apos;s CUTS Barbershop</div>
        <div>
          Designed &amp; Managed by{' '}
          <span className="text-white font-semibold">Gennady Kriss & David McIntyre-Garcia</span>
        </div>
      </div>
    </footer>
  )
}

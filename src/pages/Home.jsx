// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import heroImg from '../assets/gallery1.jpg'

export function Home() {
  return (
    <section id="home" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        <div>
          <p className="text-sm uppercase text-white/70 tracking-widest">Welcome to</p>
          <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
            DG&apos;s<br />
            CUTS<br />
            Barbershop
          </h1>
          <p className="mt-6 text-lg text-white/80">
            At DG&apos;s CUTS Barbershop, being sharp never goes out of style.
            Looking good isn’t just about the cut — it’s about the confidence.
            When you feel fresh, you’re unstoppable.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-block bg-[#FDD28A] text-black px-6 py-3 rounded-full 
                       font-medium hover:bg-[#e0c07a] transition"
          >
            Book a Haircut
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gray-900 rounded-3xl 
                          transform translate-x-6 translate-y-6" />
          <img
            src={heroImg}
            alt="Client getting a haircut"
            className="relative w-full h-auto object-cover rounded-3xl"
          />
        </div>

      </div>
    </section>
  )
}

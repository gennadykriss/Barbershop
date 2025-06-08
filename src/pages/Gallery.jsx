// src/pages/Gallery.jsx

import photo1 from '../assets/gallery1.jpg'
import photo2 from '../assets/gallery2.jpg'
import photo3 from '../assets/gallery3.png'
import photo4 from '../assets/gallery4.jpg'

const photos = [photo1, photo2, photo3, photo4]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
          Cuts That Speak for Themselves
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Browse our latest work—from clean fades to classic cuts. Every style is
          tailored, every client leaves sharp.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.slice(0, 2).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Haircut ${i + 1}`}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.slice(2).map((src, i) => (
            <img
              key={i + 2}
              src={src}
              alt={`Haircut ${i + 3}`}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

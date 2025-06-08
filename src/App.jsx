import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Services from './pages/Services'
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <> 
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="gallery" element={<Gallery />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book" element={<Booking />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
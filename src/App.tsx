import { Routes, Route } from "react-router-dom";
import './styles/App.scss'
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="team" element={<Team />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Catch-all route to redirect to the homepage */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

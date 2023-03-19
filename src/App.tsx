import { Routes, Route } from "react-router-dom";
import './styles/App.scss'
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicles" element={<Vehicles />} />
        
        {/* Catch-all route to redirect to the homepage */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

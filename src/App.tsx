import { Routes, Route } from "react-router-dom";
import './styles/App.scss'
import Navbar from "./components/Navbar"
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        {/* Catch-all route to redirect to the homepage */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

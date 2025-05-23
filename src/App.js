// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";

import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import Welcome from "./pages/Welcome";
import ContestPage from "./pages/ContestPage"; // ✅ Correctly named import

import "./components/NavBar.css";
import "./pages/Gallery.css";

function App() {
  return (
    <Router>
      <VideoBackground />
      <NavBar />
      <main className="relative z-10 min-h-screen bg-transparent pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/contest" element={<ContestPage />} /> {/* ✅ Corrected usage */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

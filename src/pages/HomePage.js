import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";
import logo from "../assets/dp.png";
import { FaInstagram, FaYoutube, FaPaintBrush, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SnapToSketch | Artistic Sketches & Portraits</title>
        <meta
          name="description"
          content="SnapToSketch – Explore hand-drawn mandalas, anime, and expressive portraits by a talented student artist from JNAFAU, Hyderabad."
        />
        <meta property="og:title" content="SnapToSketch Art Gallery" />
        <meta property="og:description" content="Art that turns imagination into reality. Explore, connect, and be inspired." />
        <meta property="og:image" content="/assets/dp.png" />
        {/* Add Google Fonts in index.html or here if preferred */}
      </Helmet>

      <main className="home-container">
        <div className="overlay"></div>

        <div className="home-content animate-fade">
          <img
            loading="lazy"
            src={logo}
            alt="SnapToSketch Logo"
            className="home-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />

          <h1 className="home-title home-title-gradient">SnapToSketch</h1>

          <p className="home-tagline">
            “Turning blank pages into magic” <br />| Mandalas, Anime, Portraits & more.
          </p>

          <p className="home-about">
            Welcome to <strong>SnapToSketch</strong> — a creative corner crafted by a fine arts student at{" "}
            <strong>Jawaharlal Nehru Architecture and Fine Arts University (JNAFAU)</strong>, Hyderabad, India.
            <br />
            Here, imagination flows through every stroke — whether it's elegant mandalas, soulful portraits, or fan-loved anime art.
          </p>

          <p className="home-cta">
            🎯 Looking for personalized sketches or custom artwork?<br />
            <strong>Let's bring your ideas to life — one line at a time.</strong>
          </p>

          <div className="home-buttons">
            <Link to="/gallery" aria-label="View art gallery">
              <button className="btn-glass">
                <FaPaintBrush /> Gallery
              </button>
            </Link>

            <Link to="/contact" aria-label="Contact the artist">
              <button className="btn-glass">
                <FaEnvelope /> Contact
              </button>
            </Link>

            <a
              href="https://www.youtube.com/@snaptosketch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit YouTube Channel"
            >
              <button className="btn-red">
                <FaYoutube /> YouTube
              </button>
            </a>

            <a
              href="https://www.instagram.com/snap_to_sketch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram Page"
            >
              <button className="btn-instagram">
                <FaInstagram /> Instagram
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

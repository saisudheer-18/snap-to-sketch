import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Welcome");

  const navItems = [
    { name: "Welcome", path: "/welcome" },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contest", path: "/contest" },  // ✅ Added Contest
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-logo"
        >
          <Link to="/" onClick={() => setActiveLink("Home")}>
            <span className="text-pink-500">Snap</span>
            <span className="text-white">To</span>
            <span className="text-purple-400">Sketch</span>
          </Link>
        </motion.div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <motion.div animate={{ rotate: 180 }} className="text-2xl">✕</motion.div>
          ) : (
            <motion.div animate={{ rotate: 0 }} className="text-2xl">☰</motion.div>
          )}
        </button>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${activeLink === item.name ? "active" : ""}`}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsOpen(false);
                }}
              >
                {item.name}
                {activeLink === item.name && (
                  <motion.span
                    layoutId="nav-underline"
                    className="nav-underline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

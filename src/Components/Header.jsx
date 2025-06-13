import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
            <div className="backdrop-blur-0 bg-white/10 shadow-md rounded-2xl px-6 py-4 flex justify-between items-center text-white">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold">K.</a>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
                    <li><a href="#home" className="hover:text-white transition">Home</a></li>
                    <li><a href="#about" className="hover:text-white transition">About</a></li>
                    <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>

                {/* Hamburger Icon (Mobile only) */}
                <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#0f172a]/90 z-40 flex flex-col items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-3xl text-white"
                        onClick={closeMenu}
                    >
                        <FaTimes />
                    </button>
                    <ul className="flex flex-col gap-8 text-xl text-white">
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Header;

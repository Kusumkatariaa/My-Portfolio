import React from "react";
import '../Styles/header.css'; // Assuming you have a CSS file for additional styles


function Header() {
    return (
        <nav className="bg-[#0a2742] py-4 flex items-center justify-center max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#1c3a4d] to-[#1a2f46] rounded-xl w-full max-w-8xl px-6 py-3 flex items-center justify-between text-white">

                {/* Logo */}
                <div className="text-3xl text-white font-semibold">K.</div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-sm text-gray-400">
                    <li>
                        <a href="#home" className="hover:text-white transition">Home</a>
                    </li>
                    <li>
                        <a href="#work" className="hover:text-white font-medium">Work</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-white transition">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
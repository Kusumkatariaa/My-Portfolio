import React from "react";

function Header() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
            <div className="backdrop-blur-0 bg-white/10 shadow-md rounded-2xl px-8 py-4 flex justify-between items-center text-white">

                {/* Logo */}
                <a href="#" className="text-2xl font-bold">K.</a>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-sm text-gray-300">
                    <li><a href="#home" className="hover:text-white transition">Home</a></li>
                    <li><a href="#about" className="hover:text-white transition">About</a></li>
                    <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

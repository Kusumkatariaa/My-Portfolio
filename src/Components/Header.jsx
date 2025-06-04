import React from "react";
import '../Styles/header.css'; // Assuming you have a CSS file for additional styles


function Header() {
    return (
        <nav className="bg-[#0a2742] py-4 flex items-center justify-center  mx-auto fixed top-0 left-0 right-0 z-5">
            <div className="bg-gradient-to-r from-[#1c3a4d] to-[#1a2f46] rounded-xl w-full max-w-8xl px-6 py-3 flex items-center justify-between text-white">

                {/* Logo */}
                <a href="#" className="text-3xl text-white font-semibold">K.</a>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-sm text-gray-400">
                    <li>
                        <a href="#home" className="hover:text-white transition">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-white transition">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-white font-medium">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-white font-medium">Projects</a>
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
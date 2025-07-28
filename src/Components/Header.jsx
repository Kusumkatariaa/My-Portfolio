import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/header.css"; // Ensure you have this CSS file for styles
import gsap from "gsap";
import React, { useState, useRef, useLayoutEffect } from "react";

function Header({ onHeaderAnimationComplete }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const hasAnimated = useRef(false); // 🔁 <-- Add this line

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useLayoutEffect(() => {
        if (!logoRef.current || !menuRef.current || hasAnimated.current) return;

        hasAnimated.current = true; // ✅ <-- Prevent re-running

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power2.out" },
                onComplete: () => {
                    if (onHeaderAnimationComplete) {
                        onHeaderAnimationComplete();
                    }

                    document
                        .querySelector(".wave-emoji")
                        ?.classList.add("animate-wave");
                },
            });

            tl.from(logoRef.current, {
                y: -30,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            const links = gsap.utils.toArray(
                menuRef.current.querySelectorAll("a")
            );

            tl.from(
                links,
                {
                    y: -10,
                    autoAlpha: 0,
                    duration: 0.3,
                    stagger: 0.2,
                    ease: "power2.out",
                    overwrite: true,
                    clearProps: "all",
                },
                ">" // Start after logo animation
            );
        }, menuRef);

        return () => ctx.revert();
    }, [onHeaderAnimationComplete]);

    return (
        <nav className="fixed top-10 left-1/2  sm:w-[89%] z-50">
            <div className="backdrop-blur-0 bg-white/10 shadow-md rounded-2xl px-6 py-4 flex justify-between items-center text-white max-w-7xl mx-auto">
                {/* Logo */}
                <a
                    ref={logoRef}
                    id="header-logo"
                    href="#"
                    className="will-change-transform text-2xl font-bold text-white"
                >
                    K.
                </a>

                {/* Desktop Links */}
                <ul ref={menuRef} className="nav-menus md:flex space-x-8 text-sm text-gray-300">
                    <li  >
                        <a href="#home" className="text-white transition-all duration-300 ease-in-out cursor-pointer hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white">
                            Contact
                        </a>
                    </li>
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
                        className="cross absolute top-6 right-6 text-3xl text-white"
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

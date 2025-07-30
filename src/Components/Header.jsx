import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/header.css";
import gsap from "gsap";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

function Header({ onHeaderAnimationComplete }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const hasAnimated = useRef(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useLayoutEffect(() => {
        if (!logoRef.current || !menuRef.current || hasAnimated.current) return;

        hasAnimated.current = true;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power2.out" },
                onComplete: () => {
                    if (onHeaderAnimationComplete) {
                        onHeaderAnimationComplete();
                    }

                    document.querySelector(".wave-emoji")?.classList.add("animate-wave");
                },
            });

            tl.from(logoRef.current, {
                y: -30,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            const links = gsap.utils.toArray(menuRef.current.querySelectorAll("a"));

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
                ">"
            );
        }, menuRef);

        return () => ctx.revert();
    }, [onHeaderAnimationComplete]);

    // IntersectionObserver to track current section
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                let maxRatio = 0;
                let mostVisibleSectionId = null;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisibleSectionId = entry.target.id;
                    }
                });

                if (mostVisibleSectionId) {
                    setActiveSection(mostVisibleSectionId);
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);




    const linkClass = (id) =>
        `transition-all duration-300 ease-in-out cursor-pointer 
   hover:text-white text-gray-300 hover:font-bold
   ${activeSection === id ? "text-white font-bold" : ""}`;


    return (
        <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 sm:w-[89%] z-50">
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
                <ul ref={menuRef} className="nav-menus md:flex space-x-8 text-sm text-gray-300 hidden md:flex">
                    <li>
                        <a href="#home" className={linkClass("home")}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={linkClass("about")}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className={linkClass("skills")}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className={linkClass("projects")}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className={linkClass("contact")}>Contact</a>
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
                        <li><a href="#home" className={linkClass("home")} onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" className={linkClass("about")} onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" className={linkClass("skills")} onClick={closeMenu}>Skills</a></li>
                        <li><a href="#projects" className={linkClass("projects")} onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" className={linkClass("contact")} onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Header;

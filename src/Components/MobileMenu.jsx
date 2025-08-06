import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

function MobileMenu({ menuOpen, closeMenu }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="fixed h-[100vh] inset-0 z-[999] bg-black/90 flex flex-col items-start px-10 justify-start pt-[0px] space-y-10 "
                >
                    {/* Close Button */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 text-white text-3xl z-[1000]"
                    >
                        ✕
                    </button>

                    {/* Animated Links */}
                    {links.map((link, index) => (
                        <motion.a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-white text-2xl font-medium"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            onClick={closeMenu}
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;

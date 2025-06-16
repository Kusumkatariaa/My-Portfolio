import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const letterKRef = useRef(null);

    useEffect(() => {
        const name = "Kusum";
        const letters = name.split("");

        textRef.current.innerHTML = letters
            .map((char, i) => `<span class="inline-block opacity-0" id="letter-${i}">${char}</span>`)
            .join("");

        const spans = Array.from(textRef.current.querySelectorAll("span"));

        const tl = gsap.timeline({
            onComplete: () => {
                // animate K to header logo
                const kElement = document.getElementById("letter-0");
                const headerLogo = document.getElementById("header-logo");

                const kRect = kElement.getBoundingClientRect();
                const logoRect = headerLogo.getBoundingClientRect();

                const dx = logoRect.left - kRect.left;
                const dy = logoRect.top - kRect.top;

                const floatingK = kElement.cloneNode(true);
                floatingK.style.position = "fixed";
                floatingK.style.left = `${kRect.left}px`;
                floatingK.style.top = `${kRect.top}px`;
                floatingK.style.zIndex = 1000;
                floatingK.style.color = "white";
                floatingK.style.fontSize = "3rem";

                document.body.appendChild(floatingK);

                gsap.to(floatingK, {
                    x: dx,
                    y: dy,
                    scale: 0.6,
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        floatingK.remove();

                        // fade out overlay
                        gsap.to(containerRef.current, {
                            opacity: 0,
                            duration: 0.8,
                            onComplete: () => onFinish()
                        });
                    }
                });
            }
        });

        tl.to(spans, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.3
        });

    }, [onFinish]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-[9999] text-white text-5xl font-bold"
        >
            <div ref={textRef}></div>
        </div>
    );
};

export default Intro;

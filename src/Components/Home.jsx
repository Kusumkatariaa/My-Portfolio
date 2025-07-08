import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/home.css";

gsap.registerPlugin(ScrollTrigger);

function Home({ triggerHomeAnimation }) {
    const greetingRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const imageWrapperRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        if (!triggerHomeAnimation) return;

        const tl = gsap.timeline();

        // 1. "Hey, there 👋🏾" from bottom
        tl.fromTo(
            greetingRef.current,
            { y: 30, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    document
                        .querySelector(".wave-emoji")
                        ?.classList.add("animate-wave");
                },
            }
        );

        // 2. Name + Job Title
        tl.fromTo(
            textRef1.current,
            { y: 30, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: .8,
                ease: "power2.out",
            }
        );

        // 3. Subtext
        tl.fromTo(
            textRef2.current,
            { y: 30, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: .8,
                ease: "power2.out",
            }
        );

        // 4. Image from right
        tl.fromTo(
            imageWrapperRef.current,
            { x: 100, autoAlpha: 0 },
            {
                x: 0,
                autoAlpha: 1,
                duration: .8,
                ease: "power2.out",
            }
        );

        // 5. Scroll-triggered image rotation
        gsap.to(imageWrapperRef.current, {
            rotate: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imageWrapperRef.current,
                start: "top 35%",
                scrub: true,
            },
        });

        gsap.to(imageRef.current, {
            rotate: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imageWrapperRef.current,
                start: "top 35%",
                scrub: true,
            },
        });
    }, [triggerHomeAnimation]);

    return (
        <div id="home" className="home-main-section sm:pt-[270px] flex justify-center mx-auto">
            <div className="grid sm:grid-cols-2 max-w-7xl w-full gap-8">
                {/* Text Section */}
                <div className="text-white max-w-2xl w-full">
                    <p
                        ref={greetingRef}
                        style={{ opacity: 0 }}
                        className="text-white/60 text-xl smm:text-2xl mb-16 smm:mb-0 lg:text-3xl col-span-6"
                    >
                        Hey, there <span className="wave-emoji inline-block">👋🏾</span>
                    </p>

                    <div ref={textRef1} className="top-text-wrapper" style={{ opacity: 0 }}>
                        <h1 className="main-head text-left text-white/60 text-3xl sm:text-4xl font-bold leading-tight mb-2">
                            I'm&nbsp;
                            <span className="bg-linear-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
                                Kusum&nbsp;Kataria
                            </span>
                        </h1>
                        <h2 className="main-head text-left text-3xl sm:text-4xl font-bold mb-4">
                            a&nbsp;<span className="text-white">Software&nbsp;Engineer</span>
                        </h2>
                    </div>

                    <p
                        ref={textRef2}
                        style={{ opacity: 0 }}
                        className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-6 leading-relaxed"
                    >
                        currently focused on building user experiences that drive growth.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center md:justify-end">
                    <div
                        ref={imageWrapperRef}
                        style={{ opacity: 0 }}

                        className="bg-[#f3e5dc] p-2 rounded-[20px] transform rotate-4 h-[max-content]"
                    >
                        <img
                            ref={imageRef}
                            src="https://avatars.githubusercontent.com/u/100646626?v=4"
                            alt="Kusum Kataria"
                            className="w-80 h-96 object-cover rounded-[20px] -rotate-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

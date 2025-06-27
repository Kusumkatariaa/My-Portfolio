import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "../Styles/home.css";

function Home({ triggerHomeAnimation }) {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useLayoutEffect(() => {
        if (!triggerHomeAnimation) return;

        const tl = gsap.timeline();

        tl.to(textRef1.current, {
            y: -30,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
        })
            .to(textRef2.current, {
                y: -30,
                autoAlpha: 1,
                duration: 1,
                ease: "power2.out",
            });

    }, [triggerHomeAnimation]);

    return (
        <div id="home" className="home-main-section sm:pt-[240px] flex justify-center mx-auto">
            <div className="grid sm:grid-cols-2 max-w-7xl w-full gap-8">
                {/* Text Section */}
                <div className="text-white max-w-2xl w-full">
                    <p className="text-white/60 text-xl smm:text-2xl mb-16 smm:mb-0 lg:text-3xl col-span-6">
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
                    <p ref={textRef2} style={{ opacity: 0 }} className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-6 leading-relaxed">
                        currently focused on building user experiences that drive growth.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center md:justify-end">
                    <div className="bg-[#f3e5dc] p-2 rounded-[20px] transform rotate-3 h-[max-content]">
                        <img
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

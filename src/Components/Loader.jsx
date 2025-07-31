import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
    const [step, setStep] = useState(0);
    const letters = ['H', 'e', 'l', 'l', 'o'];

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev === letters.length) {
                    clearInterval(interval);
                    setTimeout(() => onFinish(), 1000); // After 1s, finish loader
                }
                return prev + 1;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-[9999]">
            {/* REPLACE THIS H1 */}
            <h1 className="text-7xl italic text-white tracking-widest" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {letters.map((char, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-opacity duration-300 ${index < step ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default Loader;

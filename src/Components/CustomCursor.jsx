import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const innerRef = useRef(null);
    const outerRef = useRef(null);

    useEffect(() => {
        const inner = innerRef.current;
        const outer = outerRef.current;
        let mouseX = -100, mouseY = -100;
        let outerX = -100, outerY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            inner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };
        document.addEventListener('mousemove', onMouseMove);

        const render = () => {
            outerX += (mouseX - outerX) * 0.15;
            outerY += (mouseY - outerY) * 0.15;
            outer.style.transform = `translate(${outerX}px, ${outerY}px)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        return () => document.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <>
            <div
                ref={outerRef}
                className="hidden md:block pointer-events-none fixed top-0 left-0 w-4 h-4 bg-red-500 rounded-full mix-blend-difference z-[9999]"
                style={{ transform: 'translate(-100px, -100px)' }}
            />


            <div
                ref={innerRef}
                className="hidden md:block pointer-events-none fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference z-[9999] transition-transform duration-100 ease-out"
                style={{ transform: 'translate(-100px, -100px)' }}
            />
        </>
    );
};

export default CustomCursor;

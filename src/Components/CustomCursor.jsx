// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const addMouseListeners = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", addMouseListeners);
        return () => window.removeEventListener("mousemove", addMouseListeners);
    }, []);

    const cursorStyle = {
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        backgroundColor: "black", // Change this to match your theme
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference", // Optional for cool effect
    };

    return <div style={cursorStyle}></div>;
};

export default CustomCursor;

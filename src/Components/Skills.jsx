// Skills.jsx
import React from "react";

// Import your icons
import reactLogo from "../assets/skills/react.png";
import gitLogo from "../assets/skills/git.png";
import cssLogo from "../assets/skills/css.png";
import jueryLogo from "../assets/skills/jquery.png";
import cssAnimationLogo from "../assets/skills/css-animations.png";
import gsapLogo from "../assets/skills/gsap.png";
import bootstrapLogo from "../assets/skills/bootstrap.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import jsLogo from "../assets/skills/js.png";
import htmlLogo from "../assets/skills/html.png";
import githubLogo from "../assets/skills/github.png";
import viteLogo from "../assets/skills/vite.png";
// import reactLogo from "../assets/skills/react.png";
// import gitLogo from "../assets/skills/git.png";
// Add more as needed...

const skills = [
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "Jquery", icon: jueryLogo },
    { name: "React", icon: reactLogo },
    { name: "Tailwind", icon: tailwindLogo },
    { name: "Bootstrap", icon: bootstrapLogo },
    { name: "Css Animations", icon: cssAnimationLogo },
    { name: "Gsap", icon: gsapLogo },
    { name: "Git", icon: gitLogo },
    { name: "Github", icon: githubLogo },
    { name: "Vite", icon: viteLogo },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6 md:px-12">
            <div className="text-center mb-12">
                <p className="text-gray-400 text-sm tracking-wider uppercase">Skills And Technologies</p>
            </div>

            <div className="flex justify-center items-center w-full gap-9 flex-wrap max-w-4xl mx-auto">
                {/* Map through the skills array to display each skill */}
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center px-6 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-blue-500/30"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
                        <p className="text-white text-xl">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

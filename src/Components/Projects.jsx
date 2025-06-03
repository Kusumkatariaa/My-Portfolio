import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import dandyVideo from "../assets/videos/dandy.mp4";
import revaGrowthVideo from "../assets/videos/reva-growth.mp4";
import blumeLightVideo from "../assets/videos/blumelight-video.mp4";

const projects = [
    {
        title: "Blood Donation Website",
        description:
            "A web platform designed to connect blood donors with recipients efficiently. Users can create an account, input their blood type and location, and receive notifications when a matching recipient requires a donation.",
        tech: ["React JS", "Node JS", "Mongo DB"],
        image: "/your-images/blood-donation.webp",
        video: dandyVideo,
        github: "#",
        demo: "#",
    },
    {
        title: "Blood Donation Website",
        description:
            "A web platform designed to connect blood donors with recipients efficiently. Users can create an account, input their blood type and location, and receive notifications when a matching recipient requires a donation.",
        tech: ["React JS", "Node JS", "Mongo DB"],
        image: "/your-images/blood-donation.webp",
        video: revaGrowthVideo,
        github: "#",
        demo: "#",
    },
    {
        title: "Blood Donation Website",
        description:
            "A web platform designed to connect blood donors with recipients efficiently. Users can create an account, input their blood type and location, and receive notifications when a matching recipient requires a donation.",
        tech: ["React JS", "Node JS", "Mongo DB"],
        image: "/your-images/blood-donation.webp",
        video: blumeLightVideo,
        github: "#",
        demo: "#",
    },
    // {
    //     title: "Blood Donation Website",
    //     description:
    //         "A web platform designed to connect blood donors with recipients efficiently. Users can create an account, input their blood type and location, and receive notifications when a matching recipient requires a donation.",
    //     tech: ["React JS", "Node JS", "Mongo DB"],
    //     image: "/your-images/blood-donation.webp",
    //     github: "#",
    //     demo: "#",
    // },
    // {
    //     title: "i Notes Extension",
    //     description:
    //         "A Chrome browser extension for efficient note-taking. Users can create, save, and organize notes with time-based reminders. Developed with contributions from 10 developers.",
    //     tech: ["HTML", "CSS", "React JS", "Webpack"],
    //     image: "/your-images/inotes.webp",
    //     github: "#",
    //     demo: "#",
    // },
    // {
    //     title: "Azoom E-Commerce Website",
    //     description:
    //         "A fully functional e-commerce website developed for a U.S.-based client. The platform features product catalogs, secure payment integrations, and a user-friendly interface.",
    //     tech: ["HTML", "CSS", "Bootstrap", "GitHub"],
    //     image: "/your-images/azoom.webp",
    //     github: "#",
    //     demo: "#",
    // },
];

const ProjectCard = ({ project }) => {
    const videoRef = React.useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) videoRef.current.pause();
    };

    const handleMouseLeave = () => {
        if (videoRef.current) videoRef.current.play();
    };

    return (
        <div
            className="bg-gradient-to-br from-[#12141c] to-[#1d1f29] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[#548FBA]/30 transition duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative group overflow-hidden">
                {project.video ? (
                    <video
                        ref={videoRef}
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-80 object-cover group-hover:blur-sm group-hover:scale-105 transition-all duration-300"
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover group-hover:blur-sm group-hover:scale-105 transition-all duration-300"
                    />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center px-5 text-center">
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 px-3 py-1 rounded-full text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <FaGithub className="text-2xl hover:text-[#548FBA]" />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            <FiExternalLink className="text-2xl hover:text-[#548FBA]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="text-center mb-12">
                <p className="text-gray-400 text-sm tracking-wider uppercase">
                    Have a look at
                </p>
                <h2 className="text-4xl font-bold text-white">My Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;

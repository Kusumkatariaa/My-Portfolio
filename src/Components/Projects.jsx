import React, { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import dandyVideo from "../assets/videos/dandy.mp4";
import revaGrowthVideo from "../assets/videos/reva-growth.mp4";
import blumeLightVideo from "../assets/videos/blumelight-video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Project 1",
        description: "Sample description...",
        tech: ["React JS", "Node JS", "Mongo DB"],
        video: dandyVideo,
        demo: "#",
    },
    {
        title: "Project 2",
        description: "Sample description...",
        tech: ["React JS", "Node JS", "Mongo DB"],
        video: revaGrowthVideo,
        demo: "#",
    },
    {
        title: "Project 3",
        description: "Sample description...",
        tech: ["React JS", "Node JS", "Mongo DB"],
        video: blumeLightVideo,
        demo: "#",
    },
    {
        title: "Project 4",
        description: "Sample description...",
        tech: ["React JS", "Node JS", "Mongo DB"],
        video: dandyVideo,
        demo: "#",
    },
    {
        title: "Project 5",
        description: "Sample description...",
        tech: ["React JS", "Node JS", "Mongo DB"],
        video: revaGrowthVideo,
        demo: "#",
    },
];

const ProjectCard = ({ project }) => {
    return (
        <div className="min-w-[375px] w-[40vw] md:w-[34vw] bg-gradient-to-br from-[#12141c] to-[#1d1f29] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="relative group overflow-hidden">
                <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[18rem] md:h-[22rem] object-cover"

                />
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
                    <a href={project.demo} target="_blank" rel="noreferrer">
                        <FiExternalLink className="text-2xl hover:text-[#548FBA]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const scrollContainerRef = useRef(null);
    const scrollContentRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        const scrollContent = scrollContentRef.current;
        const scrollWidth = scrollContent.scrollWidth;
        const viewportWidth = container.offsetWidth;

        // Horizontal scroll trigger
        gsap.to(scrollContent, {
            x: -(scrollWidth - viewportWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top 30%",
                end: () => `+=${scrollWidth - viewportWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        // Heading pin trigger
        ScrollTrigger.create({
            trigger: container,
            start: "top 30%",
            end: () => `+=${scrollWidth - viewportWidth}`,
            pin: headingRef.current,
            pinSpacing: false,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="projects" className="py-32">
            {/* Static Heading */}
            <div ref={headingRef} className="text-center mb-10">
                <p className="text-white text-l tracking-wider uppercase mb-2">
                    Have a look at
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white/60">
                    My Projects
                </h2>
            </div>

            {/* Horizontal Scroll Section */}
            <div
                ref={scrollContainerRef}
                className="relative overflow-hidden w-full"
            >
                <div
                    ref={scrollContentRef}
                    className="flex w-max gap-10 md:px-10"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;

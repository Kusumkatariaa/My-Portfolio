import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/about.css";
import techinfiniIcon from "../assets/images/techinfini.webp"

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "TechInfini Solutions Pvt. Ltd.",
    date: "Dec 2023 – Present",
    points: [
      "Developed and maintained over 80 eCommerce websites using Shopify, focusing on scalable storefronts and customized themes.",
      "Integrated various Shopify apps such as subscription carts, review systems, and upsell tools to enhance store functionality.",
      "Built responsive, SEO-friendly, and performance-optimized storefronts using Liquid, HTML/CSS, and Shopify APIs.",
      "Improved Core Web Vitals and site performance through lazy loading, asset optimization, and accessibility fixes.",
      "Collaborated with designers and backend developers to ensure smooth implementation across diverse projects.",
      "Additionally developed 2–3 standalone frontend projects using React.js.",
    ],
    // icon: techinfiniIcon,
  },

  {
    role: "Frontend Developer",
    company: "EQUAD LTD · Internship",
    date: "Sep 2023 – Nov 2023",
    points: [
      "Worked remotely using React.js to develop components and UI features.",
    ],
    icon: "",
    alt: "Equad",
  }
];

const education = [
  {
    role: "Bachelor of Technology - Computer Science and Engineering",
    company: "Gyan Sagar College of Engineering",
    date: "Sep 2019 – May 2023",
    points: [
      "Graduated with a CGPA of 8.43.",
      "Specialized in Computer Science and Engineering.",
    ],
  },
  {
    role: "Frontend Development Certification",
    company: "Sheryians Coding School",
    date: "Dec 2023 – Present",
    points: [
      "Completed intensive training focused on modern frontend development practices.",
    ],
  },
];
const TimelineItem = ({ item }) => {
  const circleRef = useRef(null);
  const itemRef = useRef(null);

  useLayoutEffect(() => {
    if (!circleRef.current || !itemRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { top: "60%" },
        {
          top: "5%",
          ease: "none",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top bottom",  // When item enters the bottom of the screen
            end: "top center",    // When item reaches center
            scrub: true,
          },
        }
      );
    }, itemRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative sm:pl-10 pb-10"
    >
      {/* ⬇️ Move the circle inside this relative container */}
      <div
        ref={circleRef}
        className="absolute left-[-30px] sm:left-[-22px] w-5 h-5 border-4 border-white rounded-full bg-[#0F172A] z-10"
        style={{ top: "60%" }} // Initial position
      ></div>

      {/* Timeline Card */}
      <div className="relative z-10">
        <div className="bg-white/5 backdrop-blur-md sm:p-6 p-4 rounded-2xl w-full text-white shadow-[0_4px_20px_rgba(255,255,255,0.1)] sm:ml-6">
          <div className="flex items-center gap-4">
            {item.icon && (
              <img
                src={item.icon}
                alt={item.alt}
                className="w-10 h-10 rounded-full object-contain"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-sm font-bold text-white/70">{item.company}</p>
              <p className="text-sm text-white/50">{item.date}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-white/90">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const WorkEducation = () => {
  return (
    <section id="about" className="about-main py-12 max-w-7xl mx-auto">
      <h2 className="uppercase text-4xl md:text-5xl xl:text-6xl font-bold text-white/60 mb-10">
        WORK EXPERIENCE
      </h2>

      {/* Timeline - Work */}
      <div className="relative sm:pl-8 pl-6">
        <div className="absolute sm:left-[18px] left-[0px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0a2742] via-[#87afd5] to-[#0a2742]/10 z-0"></div>
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

      <h2 className="uppercase text-4xl md:text-5xl xl:text-6xl font-bold text-white/60 mt-10 mb-10">
        EDUCATION
      </h2>

      {/* Timeline - Education */}
      <div className="relative sm:pl-8 pl-6">
        <div className="absolute sm:left-[18px] left-[0px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0a2742] via-[#87afd5] to-[#0a2742]/10 z-0"></div>
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkEducation;

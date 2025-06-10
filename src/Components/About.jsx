import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Bluechip Technologies | Internship",
    date: "Mar 2024 – Sept 2024",
    points: [
      "Developed fully responsive sidebars for an API marketplace web app utilizing ChakraUI for context menus, mobile drawer menus, and modals.",
      "Built a reusable table component that reduced code by 15%, improving code efficiency and maintainability.",
      "Collaborated with a senior frontend engineer to develop various application screens, streamlining development and collaboration using GitHub.",
      "Worked on a Learning Management System fixing bugs on the frontend while adding and improving features in tandem with the backend developer using Bootstrap and React Bootstrap.",
      "Integrated seven endpoints in the RBAC module of a Revenue Assurance application ensuring CRUD operations could be easily performed by the admin.",
      "Developed HTML Templates for partner companies including the financial firm KPMG."
    ],
    icon: "/icons/bluechip.png"
  },
  {
    role: "Intern",
    company: "NNPC | Internship",
    date: "July 2023 – Sept. 2023",
    points: [
      "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi–step forms, tables with pagination etc.",
      "Also helped interns grasp the basics of design enabling them to make meaningful contributions."
    ],
    icon: "/icons/nnpc.png"
  }
];

const education = [
  {
    role: "Bachelor in Information Technology (BIT) - 2022–present",
    company: "Punjab University (PUCIT), Lahore, Pakistan",
    date: "2022 – Present",
    points: [
      "Acquired comprehensive knowledge in computer science and information technology.",
      "Enhanced skills in software development, passed with 3.06 CGPA."
    ]
  },
  {
    role: "Mern Stack Certification - 2022",
    company: "Next Bridge, Lahore, Pakistan",
    date: "2022",
    points: [
      "Learned advanced mern-stack, leveraging industry best practices to create dynamic and interactive web applications."
    ]
  }
];

const TimelineItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative pl-10 pb-16"
  >
    <div className="flex items-start gap-6 relative z-10">
      {/* Blue circle above the line */}
      <div className="w-4 h-4 bg-[#3d8bfd] rounded-full z-10"></div>

      {/* Content box */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl w-full text-white shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-4">
          {item.icon && (
            <img
              src={item.icon}
              alt="icon"
              className="w-10 h-10 rounded-full object-cover"
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


const WorkEducation = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold text-white mb-8">WORK EXPERIENCE</h2>

      {/* Gradient vertical line for work section */}
      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d8bfd] via-[#3d8bfd]/60 to-transparent z-0"></div>
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

      <h2 className="text-4xl font-extrabold text-white mt-20 mb-8">EDUCATION</h2>

      {/* Gradient vertical line for education section */}
      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d8bfd] via-[#3d8bfd]/60 to-transparent z-0"></div>
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};



export default WorkEducation;

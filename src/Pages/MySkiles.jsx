

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiNodedotjs, SiPython } from "react-icons/si";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySkiles = () => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
 
];
    return (
        <div id='Skiles' className=' py-30 md:py-36 '>
            <h1 className='text-pink-600 main-font text-[16px] mb-2 uppercase'  data-aos="fade-right">Features</h1>
            <h1 className=' text-5xl lg:text-6xl xl:text-7xl text-[#C4CFDE] font-bold main-font mb-5 uppercase ' data-aos="fade-up">My Skills</h1>
            <p className='text-gray-400 md:w-3/4 ' data-aos="fade-left">I have hands-on experience with modern frontend technologies, focusing on clean design and responsive web development. I love working with tools like React, Tailwind CSS, and Firebase to build dynamic and user-friendly websites. My skillset is always growing as I explore new frameworks and improve every day.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
               data-aos="zoom-in"
            data-aos-delay={index * 100}
              className="bg-[#24272e] text-white  p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-pink-600 transition-transform duration-300  text-center"
            >
             <div className=''>
                 <div className="text-4xl mb-3 flex justify-center items-center">{skill.icon}</div>
             </div>
              <p className="text-lg font-semibold ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        </div>
    );
};

export default MySkiles;
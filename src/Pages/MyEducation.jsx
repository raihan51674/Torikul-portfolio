
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyEducation = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const education = [
    {
      degree: "BSc in Computer Science & Software Engineering(CSSE) ",
      institution: "American International University-Bangladesh",
      year: "2023 – present now",
      description:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
      grade: "3.64/4",
    },
    {
      degree: " Higher Secondary Education",
      institution: "Cumilla Victoria Government College",
      year: "2019 – 2021",
      description:
        "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
      grade: "5.00/5",
    },
    {
      degree: "Secondary  Education",
      institution: "Cumilla Zilla School",
      year: "2014 – 2019",
      description:
        "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
      grade: "5.00/5",
    },
  ];

  return (
    <div id="education" className="bg-[#1c1f26] text-white  md:px-0 py-40 md:py-48">

      <h1 className="text-pink-600 text-[16px] mb-2 uppercase" data-aos="fade-right">2008 – still now</h1>
      <h1 className="text-[42px] md:text-5xl lg:text-6xl text-[#C4CFDE] font-bold mb-10 uppercase" data-aos="fade-left">
        Education
      </h1>

      {/* Vertical Timeline Container */}
      <div className="relative border-l  pl-6 px-4 space-y-10">
        {education.map((edu, index) => (
          <div key={index}
          data-aos="fade-up"
           data-aos-delay={index * 150}
           className="relative">

            <span className="absolute -left-[14px] md:-left-[11px] top-2 w-3 h-3 bg-pink-600 rounded-full border border-white"></span>


            <div className="bg-[#2d2e35] p-6 rounded-xl shadow-md hover:shadow-pink-600 transition-transform hover:-translate-y-1 duration-300 relative">

              <div className="absolute top-4 right-4 bg-pink-600 text-white text-sm font-bold px-3 py-1 rounded shadow">
                {edu.grade}
              </div>


              <h3 className="text-xl font-semibold text-white mb-1 uppercase">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 uppercase mb-2">
                {edu.institution} ({edu.year})
              </p>
              <p className="text-gray-300 text-sm border-t border-gray-600 pt-3 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEducation;

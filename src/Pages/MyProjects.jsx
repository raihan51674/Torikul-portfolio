import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub ,  FaInfoCircle  } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyProjects = () => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const projectData = [
        {
            id: 1,
            title: "BodyBoost",
            images: [
                "https://i.ibb.co/N2w7rXwd/Screenshot-2025-06-28-220217.png",
                "https://i.ibb.co/9HDJpnwf/Screenshot-2025-06-28-220230.png",
                "https://i.ibb.co/6hRj1h9/Screenshot-2025-06-28-220238.png",
                "https://i.ibb.co/ttcfBg7/Screenshot-2025-06-28-220301.png",
            ],
            description:
                "BodyBoost is a fitness-focused React web application designed to empower users on their health and wellness journey.It offers personalized workout routines, progress tracking, motivational tools, and interactive visual components to keep users engaged and consistent with their fitness goals.Built using React, Tailwind CSS, and integrated with MongoDB, the application ensures a seamless experience through dynamic UI, responsive design, and fast loading performance.",
            usetools: ["Tailwindcss", "daisyui", "React", "Express Js", "MongoDB"],
            live: "https://bodyboostreact.netlify.app/",
            repo: "#",
        },
        {
            id: 2,
            title: "REVOX",
            images: [
                "https://i.ibb.co/fzfdwvJ5/Screenshot-2025-06-28-220856.png",
                "https://i.ibb.co/KpL317LN/Screenshot-2025-06-28-220903.png",
                "https://i.ibb.co/kgcKFNKv/Screenshot-2025-06-28-220913.png",
                "https://i.ibb.co/Kzsm8Kbb/Screenshot-2025-06-28-221104.png",
            ],
            description:
                "Revoxis your go-to platform for discovering honest, insightful, and community-driven reviews on a wide range of products and services. Whether you're looking for the best local restaurants, tech gadgets, apps, or service providers. it is a modern, responsive React-based web application designed to showcase user-generated assignments and creative works.",
            usetools: ["Tailwindcss", "React", "Express Js", "MongoDB"],
            live: "https://rev0x.netlify.app/",
            repo: "#",
        },
        {
            id: 3,
            title: "FloraTrack",
            images: [
                "https://i.ibb.co/0ynxLr5d/Screenshot-2025-06-28-215816.png",
                "https://i.ibb.co/mCb4HCsx/Screenshot-2025-06-28-215830.png",
                "https://i.ibb.co/RTvKT1CC/Screenshot-2025-06-28-215859.png",
                "https://i.ibb.co/cSsHvZsN/Screenshot-2025-06-28-215930.png",
            ],
            description:
                "FloraTrack is a modern and interactive plant management web application where users can explore, manage, and track various plants with ease.The platform is designed with a focus on user experience, responsiveness, and elegant UI. It provides an intuitive interface for browsing plant information, tracking growth, and setting reminders for watering or care.",
            usetools: ["Tailwindcss",  "React", "Express Js", "MongoDB"],
            live: "https://floratrack.netlify.app/",
            repo: "#",
        },
    ];

    const sliderSettings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
    };

    return (
        <div id="projects" className="py-30 " >
            <h3 className='text-pink-600 main-font text-[16px] mb-2 uppercase' data-aos="fade-right">Visit and Give Feedback</h3>
            <h1 className=' text-5xl lg:text-6xl xl:text-7xl text-[#C4CFDE] font-bold main-font mb-5 uppercase ' data-aos="fade-left" >My Projects</h1>
           <div className=" flex flex-col gap-8 pt-20">
             {projectData.map((project , i ) => (
                
                <div
                    key={project.id}
                    className={`flex flex-col md:flex-row bg-[#24272e] text-white  rounded-xl shadow-lg mg:gap-5  overflow-hidden ` }
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                >
                    {/* Left Image Slider */}
                    <div className="w-full md:w-1/2">
                        <Slider {...sliderSettings}>
                            {project.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${project.title} - ${index + 1}`}
                                    className="w-full h-72  md:h-[420px]  object-cover"
                                />
                            ))}
                        </Slider>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2  flex flex-col px-4 pt-6 pb-8 justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-5 main-font">{project.title}</h2>
                            <p className="text-gray-400 text-sm text-[18px] line-clamp-4 lg:line-clamp-5 mb-3">{project.description}</p>
                            <div className="text-sm text-gray-500 my-6 ">
                              
                                     {project.usetools.map((pro , index) => <h1 key={index} className=" mx-2 px-4 py-3 my-2 badge badge-outline text-pink-600 border-pink-600 ">{pro} </h1>)}
                                     
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6 md:gap-10 ml-2 ">
                            
                            <a href={project.live} target="_blank"><button className=" border border-pink-600 bg-[#40495f] p-4 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition "> <FaExternalLinkAlt size={25}/></button></a>
                            <a href={project.repo} target="_blank"><button className=" border border-pink-600 bg-[#444c5f] p-4 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition "><FaGithub size={25}/></button></a>
                            <a href={project.repo} target="_blank"><button className=" border border-pink-600 bg-[#444c5f] p-4 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition ">< FaInfoCircle  size={25}/></button></a>
                            
                        </div>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
};

export default MyProjects;

import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#0f0f1a] via-[#1c1f26] to-[#141414] text-white flex items-center justify-center pt-28 px-4"
    >
      <div className="container xl:w-9/12 mx-auto flex flex-col-reverse md:flex-row justify-between gap-12 items-center px-6">
        {/* Left Content */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <p className="text-sm md:text-base tracking-widest text-pink-400 uppercase mb-3">
            Welcome to my world
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-pink-500 drop-shadow-lg">
              Torikul Islam Bhuiyan
            </span>
            <div className="text-white text-xl md:text-4xl lg:text-5xl flex gap-2 justify-center md:justify-start mt-2">
              a{" "}
              <Typewriter
                options={{
                  strings: [
                    "Creative Thinker",
                    "Web Developer",
                    "React Learner",
                    "Learning UI/UX",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 50,
                }}
              />
              <span className="text-pink-500">.</span>
            </div>
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I’m a passionate and dedicated web developer and designer who loves
            to build creative, user-friendly experiences using modern web
            technologies. I always strive to learn and improve with every
            project I take on.
          </p>

          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "";
              link.download = "";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-pink-500 to-pink-700 rounded-xl text-lg uppercase shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300"
          >
            Resume <FaDownload />
          </button>

          {/* Socials */}
          <div className="mt-10 flex flex-col md:flex-row gap-10 md:items-start">
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">
                Find me on
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {[
                  { icon: <FaGithub />, link: "#" },
                  { icon: <FaLinkedinIn />, link: "#" },
                  { icon: <FaTwitter />, link: "#" },
                  { icon: <FaFacebookF />, link: "#" },
                ].map((social, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-110 transition-all cursor-pointer"
                  >
                    <a href={social.link} target="_blank" rel="noreferrer">
                      {social.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Image Section) */}
        <div
          data-aos="zoom-in"
          className="relative z-10 rounded-full h-[320px] w-[320px] md:h-[420px] md:w-[420px] bg-[#24272e]/40 backdrop-blur-xl shadow-xl overflow-hidden border-4 border-pink-500/40 animate-floating"
        >
          <img
            // src="https://i.ibb.co/jvRX65zc/about8.jpg"
            src="https://i.ibb.co/mVLmd6PV/tttt-3d316301.jpg"
            alt="Jone Lee"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

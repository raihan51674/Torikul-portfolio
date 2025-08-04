import React, { useState } from "react";
import { FaDownload, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      {[
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "Skiles", label: "skills" },
        { to: "education", label: "education" },
        { to: "projects", label: "projects" },
        { to: "contact", label: "contact" },
      ].map((link, index) => (
        <Link
          key={index}
          to={link.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
          className="cursor-pointer hover:text-pink-600 transition"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed navbar */}
      <div className="fixed top-0  left-0 w-full z-50 bg-[#1c1f26] md:text-sm lg:text-base uppercase text-white shadow-md main-font">
        <div className="  container xl:w-8/12 mx-auto flex justify-between items-center px-6 py-6">
          {/* Logo */}
          <img src="/logo.png" alt="" className="w-15" />


          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6">{links}</nav>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "";
              link.download = "";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="text-[18px] border border-pink-600 bg-[#24272e] px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition hover:bg-pink-600 uppercase hidden md:flex items-center gap-2"
          >
            Resume
            <FaDownload className="text-white" />
          </button>
          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <FiMenu size={30} />
          </button>
        </div>
      </div>

      {/* Overlay when mobile drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 p-5 text-white bg-[#1c1f26] z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6 ">
          <div className="flex items-center gap-3">
            <img
              src="/logo22.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={30} className="  text-pink-600 hover:scale-110" />
          </button>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          I’m  a passionate web developer. I’m thoughtful, creative, and always eager to learn something new every day.
        </p>

        <hr className="border-gray-700 mb-4" />

        <div className="p-4 flex flex-col gap-4 uppercase ">

          {links}

        </div>

        <hr className="my-6 border-gray-700" />
        <p className="uppercase text-xs text-gray-500 mb-4">Find With Me</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/tasnim.hasan.iqbal" className="p-3 bg-[#24272e]  rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/iqbal-hasan-91a1a5365" className="bg-[#24272e] p-3 rounded-xl shadow-lg hover:bg-pink-600 hover:scale-105 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/qr/YZ22LZAZUPEBG1" target="_blank" className="bg-[#24272e] p-3 rounded-lg hover:bg-pink-600 transition hover:scale-105 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

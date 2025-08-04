import React, { useRef, useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_by4aler", // replace
        "template_4iu2spr", // replace
        form.current,
        "9uE20SEf3cRkaicQx" // replace
      )
      .then(
         () => {
          setSuccessMsg("✅ Your message has been sent successfully!");
          form.current.reset();
        },
        () => {
          setSuccessMsg("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className=" py-26 md:py-36 main-font">
      <div className="my-12">
        <h4 className=" text-center text-pink-600 main-font text-[16px] mb-2 uppercase"data-aos="fade-down">Contact</h4>
      <h2 className="text-5xl text-center lg:text-6xl text-[#C4CFDE] font-bold main-font mb-5 uppercase" data-aos="fade-up">Contact With Me</h2>
      </div>

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#23252e] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
        {/* Left - Profile Card */}
        <div className="bg-[#1e2028] rounded-xl p-4 sm:p-6" data-aos="fade-right">
          <img
            src="/contact1.png"
            alt="Profile"
            className="w-full h-56 sm:h-64 object-cover rounded-lg mb-6 hover:scale-105  hover:shadow-lg transition-transform  "
          />
          <h3 className="text-xl sm:text-2xl font-semibold"></h3>
          <p className="text-sm text-gray-400">MERN Stack Developer</p>
          <p className="text-gray-300 mt-3 text-sm">
            I am available for freelance work. Connect with me and call into my account.
          </p>
          <p className="mt-3 text-sm">
            <span className="font-semibold text-gray-200">Phone:</span>{" "}
            <span className="text-pink-600">+8801793588807</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold  text-gray-200">Email :</span>{" "}
            <a href="mailto:iqbal.hasan.webdev@gmail.com" className="text-pink-600 overflow-hidden  text-[13px] md:text-base">
              torikulislam@gmail.com
            </a>
          </p>

          <p className="text-sm mt-5 mb-2 text-gray-400">Find with me</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" target="_blank" className="bg-[#2c2e38] p-3 rounded-lg hover:bg-pink-600 transition">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" className="bg-[#2c2e38] p-3 rounded-lg hover:bg-pink-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" className="bg-[#2c2e38] p-3 rounded-lg hover:bg-pink-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" className="bg-[#2c2e38] p-3 rounded-lg hover:bg-pink-600 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-[#1e2028] border border-gray-700 focus:border-pink-500 text-white px-4 py-3 rounded-lg outline-none w-full"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="bg-[#1e2028] border border-gray-700 focus:border-pink-500 text-white px-4 py-3 rounded-lg outline-none w-full"
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="bg-[#1e2028] border border-gray-700 focus:border-pink-500 text-white px-4 py-3 rounded-lg outline-none w-full"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-[#1e2028] border border-gray-700 focus:border-pink-500 text-white px-4 py-3 rounded-lg outline-none w-full"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="bg-[#1e2028] border border-gray-700 focus:border-pink-500 text-white px-4 py-3 rounded-lg outline-none w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-[#2c2e38] hover:bg-pink-600 transition text-white font-semibold py-3 rounded-lg w-full"
            >
              SEND MESSAGE
            </button>
            {successMsg && (
              <p className={`mt-4 text-center text-sm ${successMsg.includes("✅") ? "text-green-400" : "text-red-400"}`}>
                {successMsg}
              </p>
              
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

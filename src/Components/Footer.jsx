
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" text-gray-400 pt-20 pb-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Profile & Social */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/mVLmd6PV/tttt-3d316301.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-gray-700"
            />
            <span className="text-lg font-semibold">Torikul</span>
          </div>
          <div className="flex gap-4 mt-2 text-white">
            <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded shadow-lg transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded shadow-lg transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded shadow-lg transition">
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">QUICK LINK</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">My Projects</a></li>
            <li><a href="#" className="hover:text-white">Resume</a></li>
            <li><a href="#" className="hover:text-white">Education</a></li>
            <li><a href="#" className="hover:text-white">Contact me</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Authentication</a></li>
            <li><a href="#" className="hover:text-white">System Status</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Over Right</a></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">DEVELOPERS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Authentication</a></li>
            <li><a href="#" className="hover:text-white">API Reference</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Open Source</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm border-t border-gray-700 pt-6">
        © 2025. All rights reserved by <span className="text-pink-600">Torikul</span>
      </div>
    </footer>
  );
};

export default Footer;

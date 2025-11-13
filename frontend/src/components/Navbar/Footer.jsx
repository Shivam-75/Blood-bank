import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const socialIconClass =
    "bg-white text-red-700 p-2 rounded-full hover:bg-gray-200 transition duration-300";

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Question", to: "/Question" },
    { name: "Donate", to: "/Donar" },
    { name: "Camps", to: "/Camp" },
    { name: "Blood Request", to: "/Request" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", to: "/" },
    { icon: <FaTwitter />, label: "Twitter", to: "/" },
    { icon: <FaInstagram />, label: "Instagram", to: "/" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", to: "/" },
  ];

  return (
    <footer className="bg-gradient-to-l from-red-600 to-black text-white pt-10 pb-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* 🩸 About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Save Life Blood Bank</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            We are dedicated to saving lives by ensuring safe and timely blood
            supply. Join our mission — donate blood and be a hero for someone in
            need.
          </p>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-100 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-white font-bold"
                        : "text-gray-100 hover:text-white"
                    }`
                  }>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt aria-label="Address" />
              <span>ITM College Of Management</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt aria-label="Phone" />
              <a href="tel:+911234567890" className="hover:underline">
                +91 1234567890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope aria-label="Email" />
              <a
                href="mailto:support@lifelinebloodbank.org"
                className="hover:underline">
                support@lifelinebloodbank.org
              </a>
            </li>
          </ul>
        </div>

        {/* 🌐 Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3 text-lg">
            {socialLinks.map((social, i) => (
              <NavLink
                key={i}
                to={social.to}
                aria-label={social.label}
                className={socialIconClass}>
                {social.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-red-400 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Lifeline Blood Bank | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

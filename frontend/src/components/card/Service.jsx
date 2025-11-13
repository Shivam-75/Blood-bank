import React, { memo } from "react";
import {
  FaTint,
  FaAmbulance,
  FaHandsHelping,
  FaUserFriends,
} from "react-icons/fa";

const services = [
  {
    Icon: FaTint,
    color: "text-red-600",
    title: "Safe Blood Donation",
    description:
      "We organize blood donation drives with strict safety protocols. All blood is carefully screened to ensure it is safe for patients in need.",
  },
  {
    Icon: FaAmbulance,
    color: "text-red-500",
    title: "Emergency Blood Supply",
    description:
      "Providing quick and reliable blood supply to hospitals and patients during emergencies. Our network ensures timely delivery wherever needed.",
  },
  {
    Icon: FaHandsHelping,
    color: "text-red-600",
    title: "Volunteer Programs",
    description:
      "Join our team of volunteers to assist in donation drives, awareness campaigns, and community outreach programs. Make a difference in your community.",
  },
  {
    Icon: FaUserFriends,
    color: "text-red-500",
    title: "Community Awareness",
    description:
      "We educate communities about the importance of blood donation through campaigns, workshops, and events. Awareness is key to saving lives.",
  },
];

const Service = () => {
  return (
    <section
      className="w-[95%] mx-auto  bg-white py-10"
      role="region"
      aria-label="Blood bank services section">
      {/* ✅ Intro Text */}
      <header className="w-[95%] mx-auto mb-14 text-center px-3">
        <p className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent font-serif text-md  sm:text-1xl font-extrabold leading-relaxed sm:text-base">
          We provide a wide range of services to ensure that patients in need
          receive safe, timely, and reliable blood. Join us in our mission to
          save lives and support communities.
        </p>
      </header>

      {/* ✅ Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4   ">
        {services.map(({ Icon, color, title, description }, index) => (
          <article
            key={index}
            className="bg-gradient-to-r from-black to-red-700 rounded-xl p-2 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-center text-center text-white ">
            <div className="flex justify-center mb-3">
              <Icon
                className={`${color} w-10 h-10 drop-shadow-md text-white`}
              />
            </div>

            <h2 className="font-extrabold text-lg sm:text-xl mb-2 font-serif">
              {title}
            </h2>

            <p className="font-serif text-sm opacity-90 leading-relaxed ">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;

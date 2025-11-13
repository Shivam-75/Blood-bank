import React, { memo } from "react";
import { image } from "../../assets/item";
import { NavLink, useNavigate } from "react-router-dom";

const Hero1 = () => {
  const navigaatae = useNavigate();
  return (
    <section
      className="pb-8 sm:pb-[50px] grid grid-cols-1 sm:grid-cols-2 min-h-[90vh] items-center"
      role="region"
      aria-label="Blood donation hero section">
      {/* ✅ Left Content */}
      <div className="flex flex-col items-start sm:items-start justify-center w-full px-6 sm:px-10 space-y-5">
        <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent animate-bounce leading-tight will-change-transform">
          Donate Today, Save a Life Tonight. Donor
        </h1>

        <p className="max-w-[700px] font-serif  text-sm sm:text-md leading-relaxed opacity-90 sm:text-base">
          Every drop of blood can save a life. Be a hero today by donating
          blood. Our blood bank operates 24/7 to meet urgent needs. Night or
          day, help is always available. Donation is safe, easy, and quick. Your
          small act can bring hope to many. Every donor makes a real difference
          in someone’s life. Join our community of lifesavers and inspire
          others. Together, we can ensure no patient waits for blood. Donate now
          and give the gift of life.
        </p>

        <ul className="list-disc pl-6  text-sm sm:text-md font-serif sm:text-base">
          <li>24/7 Availability Highlights</li>
          <li>About Blood Bank / Mission</li>
          <li>Blood Donation Importance</li>
          <li>Steps to Donate Blood</li>
        </ul>

        <div className="sm:pt-4">
          <button
            className="p-2 rounded-md hover:bg-green-700 text-white bg-red-700 duration-100  font-serif w-[180px] mx-2 sm:w-[230px]"
            onClick={() => {
              navigaatae("/Camp");
            }}>
            Camp Details <span className="text-[20px] mx-3">→</span>
          </button>
        </div>
      </div>

      {/* ✅ Right Image (Optimized for LCP) */}
      <div className="flex justify-center items-center w-full mt-6 sm:mt-0">
        <img
          src={image.blood4}
          alt="Blood donation illustration"
          loading="eager" // ✅ Load immediately (improves LCP)
          decoding="async" // ✅ Don’t block main thread
          width="500"
          height="570"
          className="h-auto max-h-[570px] w-auto object-contain "
        />
      </div>
    </section>
  );
};

export default Hero1;

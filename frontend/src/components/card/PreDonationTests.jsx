import { FaHeartbeat, FaVial, FaUserMd, FaSyringe } from "react-icons/fa";

const testsData = [
  {
    Icon: FaUserMd,
    title: "Health Screening",
    description:
      "Blood pressure, pulse, weight, and temperature are checked to ensure donor safety.",
  },
  {
    Icon: FaHeartbeat,
    title: "Hemoglobin Test",
    description:
      "Ensures donor has enough hemoglobin; minimum 12.5 g/dl is required to donate safely.",
  },
  {
    Icon: FaVial,
    title: "Blood Group Test",
    description:
      "Determines your blood type (A, B, AB, O) and Rh factor for compatibility with recipients.",
  },
  {
    Icon: FaSyringe,
    title: "Infection Screening",
    description:
      "Tests for HIV, Hepatitis B & C, Syphilis, Malaria, and other infectious diseases.",
  },
];

const PreDonationTests = () => {
  return (
    <section
      className="mx-auto py-16 bg-white"
      role="region"
      aria-label="Pre-donation tests and screening information">
      {/* ✅ Heading */}
      <h1 className="text-[24px] sm:text-[30px] md:text-[40px]  font-extrabold text-center bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent leading-tight mb-12 will-change-transform">
        Pre-Donation Tests
      </h1>

      {/* ✅ Tests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  sm:px-10 mx-auto px-2">
        {testsData.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black to-red-700 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-center items-center text-center">
            <Icon
              className="text-white w-10 h-10 mb-4 drop-shadow-md"
              aria-hidden="true"
            />
            <h2 className="font-bold text-white text-md sm:text-xl mb-2">
              {title}
            </h2>
            <p className="text-white font-serif text-sm opacity-90 leading-snug">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreDonationTests;

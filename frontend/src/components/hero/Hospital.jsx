const Hospital = ({ imgs }) => {
  return (
    <section
      className="py-10 bg-white"
      role="region"
      aria-label="Hospital collaboration section">
      {/* ✅ Heading */}
      <div className="text-center px-6 sm:px-10">
        <h1 className="font-extrabold  sm:text-3xl md:text-4xl  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent leading-tight mb-4 will-change-transform text-md animate-bounce">
          Collaborating with Hospitals to Save Lives
        </h1>

        <p className="font-serif text-sm w-[90%] mx-auto bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent opacity-90 leading-relaxed sm:text-base">
          Join the movement, be the change, and let your kindness flow through
          someone’s veins. Every drop counts, every donor matters, and together,
          we can ensure that no life is lost for want of blood. Donate today —
          because your blood has the power to give life, hope, and happiness to
          those who need it most.
        </p>
      </div>

      {/* ✅ Image Grid */}
      <div className="w-[95%] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center">
        {imgs.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden h-[200px]  rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 will-change-transform">
            <img
              src={item}
              alt={`Hospital partner ${index + 1}`}
              decoding="async" // ✅ Non-blocking decode
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hospital;

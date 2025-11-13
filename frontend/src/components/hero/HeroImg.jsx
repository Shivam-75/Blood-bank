import { image } from "../../assets/item";

const HeroImg = () => {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 min-h-[70vh] bg-white items-center"
      role="region"
      aria-label="Blood donation hero image section">
      {/* ✅ Optimized Image */}
      <div className="flex items-center justify-center px-4">
        <img
          src={image.bloodimsghero}
          alt="Blood donation awareness illustration"
          loading="eager" // Load immediately (improves LCP)
          decoding="async" // Prevents main-thread blocking
          width="600"
          height="500"
          className="w-full sm:w-[90%] lg:w-[80%] h-auto object-contain rounded-lg "
        />
      </div>

      {/* ✅ Text Content */}
      <div className="flex flex-col justify-center gap-4 px-6 sm:px-10">
        <h1 className="sm:text-3xl md:text-4xl  font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent leading-tight will-change-transform text-md animate-bounce">
          Every Drop Delayed Is a Life Lost
        </h1>

        <p className="font-serif   leading-relaxed bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent opacity-90 text-sm sm:text-base">
          Every day, thousands of patients around the world wait for a drop of
          hope — a drop that could save their lives. From accident victims and
          surgery patients to mothers in childbirth, the need for blood is
          constant and urgent.
        </p>
      </div>
    </section>
  );
};

export default HeroImg;

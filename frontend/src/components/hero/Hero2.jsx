import { useNavigate } from "react-router-dom";
import { image } from "../../assets/item.js";

const Hero2 = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col sm:flex-row bg-white items-center  "
      role="region"
      aria-label="Blood donation hero section 2">
      {/* ✅ Left Text Content */}
      <div className="flex flex-col  items-start gap-2 w-full sm:w-[50%] px-6 sm:px-12">
        <h1 className="sm:text-3xl md:text-4xl  font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent leading-tight will-change-transform text-md animate-bounce">
          Your Blood Can Be Someone’s Second Chance
        </h1>

        <p className="font-serif  sm:text-md leading-relaxed opacity-90 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent text-sm sm:text-base">
          We provide a safe, hygienic, and comfortable environment for every
          donor. Whether it is your first donation or your hundredth, our
          trained professionals guide you through every step, ensuring a smooth
          and stress-free experience. Safety and care are our top priorities,
          and we leave no stone unturned to make every donation meaningful.
        </p>
        <button
          className=" p-2 md:mt-[80px] sm:m-2 sm:px-10 rounded-md hover:bg-green-700 text-white bg-red-700 duration-100  font-serif w-[95%] sm:w-[230px]"
          onClick={() => {
            navigate("/Question");
          }}>
          Ask Any Think <span className="text-[20px] mx-3">→</span>
        </button>
      </div>

      {/* ✅ Right Image (Optimized for LCP) */}
      <div className="relative flex justify-center items-center w-full sm:w-[50%] mt-10 sm:mt-0">
        {/* Background Text */}
        <h2 className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-[80px]  font-serif font-extrabold bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent top-1/2">
          Blood Bank
        </h2>

        {/* Main Image */}
        <img
          src={image.doctor1}
          alt="Doctor promoting blood donation"
          loading="eager"
          decoding="async"
          width="500"
          height="500"
          className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] h-auto object-contain "
        />
      </div>
    </section>
  );
};

export default Hero2;

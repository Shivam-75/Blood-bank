import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../store/Authstore";

const Bloodcategory = () => {
  const { bloodlist, setblooddata } = useAuth();
  const navigate = useNavigate();
  const [delay, setDelay] = useState(0);

  // ✅ UseMemo to prevent recalculations if bloodlist doesn’t change
  const totalBloodGroups = useMemo(() => bloodlist.length, [bloodlist]);

  // 🕐 Smooth blood group rotation
  useEffect(() => {
    if (totalBloodGroups === 0) return;

    const interval = setInterval(() => {
      setDelay((prev) => (prev + 1) % totalBloodGroups);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalBloodGroups]);

  // 🧩 Handle button click cleanly
  const handleBloodSelect = (group) => {
    setblooddata(group);
    navigate("/BloodRequest-form");
  };

  return (
    <>
      <span
        className="rounded-full font-extrabold  text-[30px] text-red-700 hover:bg-red-600 px-2 hover:text-white absolute cursor-pointer duration-100 sm:top-[100px] sm:left-7 top-[80px]"
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </span>

      <div className="py-6 sm:py-12 bg-slate-100">
        <h1 className="text-[28px] sm:text-[40px] font-serif font-extrabold text-center w-[90%] mx-auto py-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
          Choose Blood Group{" "}
          <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
            {bloodlist[delay] || ""}
          </span>
        </h1>

        <p className="text-center text-gray-700 pb-10 text-[16px] sm:text-[18px] mx-auto w-[90%] bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent">
          Select your blood group below to check availability, learn about
          compatibility, or request blood. Every correct match can help save a
          life — choose wisely and act with compassion.
        </p>

        <div className="sm:py-[40px] sm:px-[5vmin] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10">
          {bloodlist.map((group, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-2xl w-[90%] m-auto py-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-[60px] sm:text-[70px] font-serif text-red-600 font-extrabold h-[130px] flex items-center justify-center">
                {group}
              </h2>
              <button
                onClick={() => handleBloodSelect(group)}
                className="py-[8px] sm:py-[10px] bg-red-700 hover:bg-blue-600 rounded-full w-[90%] text-white font-semibold duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Blood Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bloodcategory;

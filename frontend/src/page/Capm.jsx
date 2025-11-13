import React, { useEffect, useState, useCallback } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaHospital,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../store/Authstore";
import Loading from "../components/loading/Loading";
import { CampDataapi } from "../service/Api";

const Camp = () => {
  const [loading, setLoading] = useState(false);
  const [campData, setCampData] = useState([]);
  const { tostStyle } = useAuth();
  const navigate = useNavigate();

  // 🧠 Memoize function to avoid recreating on each render
  const fetchCampData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await CampDataapi();
      const data = await response.json();

      if (response.ok) {
        setCampData(data?.data || []);
      } else {
        toast.error(data?.message || "Failed to fetch camp data", tostStyle);
      }
    } catch (error) {
      console.error("Camp Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCampData();
  }, [fetchCampData]);

  // 🧩 Render each camp card
  const renderCampCard = (item) => (
    <div
      key={item._id}
      className="hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-xl p-5">
      <ul className="space-y-3 text-left text-gray-800 font-serif text-sm sm:text-[15px]">
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-600" />
          <span>
            <strong>Location:</strong> {item.location}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <FaCalendarAlt className="text-red-600" />
          <span>
            <strong>Date:</strong> {item.date}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <FaClock className="text-red-600" />
          <span>
            <strong>Time:</strong> {item.time}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <FaPhoneAlt className="text-red-600" />
          <span>
            <strong>Contact:</strong> {item.contact}
          </span>
        </li>
        <li className="flex items-center gap-3">
          <FaHospital className="text-red-600" />
          <span>
            <strong>Organized By:</strong> {item.organizedBy}
          </span>
        </li>
      </ul>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/Donar")}
          className="bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold w-full py-3 rounded-full shadow-md">
          Register Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-100 py-10 px-3 sm:px-6">
      {/* Header */}
      <span
        className="rounded-full font-extrabold  text-[30px] text-red-700 hover:bg-red-600 px-2 hover:text-white cursor-pointer duration-100"
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </span>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-4">
          Upcoming Blood Donation Camps
        </h2>
        <p className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent text-[15px] sm:text-[17px] w-[90%] mx-auto">
          Join our mission to save lives! Every donor counts — your contribution
          brings hope to those in need.
        </p>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <Loading height={70} width={70} />
        </div>
      ) : campData.length > 0 ? (
        <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campData.map(renderCampCard)}
        </div>
      ) : (
        <div className="text-center text-gray-600 font-semibold py-20 text-[20px]">
          No upcoming camps found.
        </div>
      )}
    </div>
  );
};

export default Camp;

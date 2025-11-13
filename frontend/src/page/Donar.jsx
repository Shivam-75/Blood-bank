import React, { useState } from "react";
import Loading from "../components/loading/Loading";
import { toast } from "react-toastify";
import useAuth from "../store/Authstore";
import { DonarApi } from "../service/Api";
import { useNavigate } from "react-router-dom";

const Donar = () => {
  const navigate = useNavigate();
  const [loading, setlaoding] = useState(false);
  const { tostStyle } = useAuth();
  const [formData, setFormData] = useState({
    donarName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    number: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setlaoding(true);
      const response = await DonarApi(formData);
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, tostStyle);
        setFormData({
          donarName: "",
          age: "",
          gender: "",
          bloodGroup: "",
          number: "",
          email: "",
          address: "",
        });
      } else {
        toast.error(data.message, tostStyle);
      }
    } catch (err) {
      throw new Error("Donar Error ", err);
    } finally {
      setlaoding(false);
    }
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
      {loading && (
        <div className="absolute top-[50%] left-[40%] sm:left-[48%]">
          <Loading height={70} width={70} />
        </div>
      )}

      <div className="bg-gray-100 py-16 px-2 flex items-center justify-center w-[100%]">
        <div className="bg-white shadow-2xl rounded-[10px] sm:p-9 p-3 w-[90vmin]">
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent  mb-4">
            Blood Donor Application Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-2 px-[2px] text-[14px]">
            {/* Full Name */}
            <div className="">
              <label className=" text-gray-700 font-semibold  mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="donarName"
                value={formData.donarName}
                onChange={handleChange}
                required
                className="w-full border  rounded-xl p-2 focus:outline-none "
              />
            </div>

            {/* Age & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full border text-gray-700 rounded-xl p-2 focus:outline-none ">
                  <option hidden></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="text-gray-700 w-full border rounded-xl p-2 focus:outline-none ">
                <option hidden className="text-gray-700"></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-2 focus:outline-none  "
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl p-2 focus:outline-none  "
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="border resize-none w-full  rounded-xl p-2 focus:outline-none  "></textarea>
            </div>

            {/* Consent */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="w-5 h-5 accent-red-600"
              />
              <label className="text-gray-700">
                I confirm that I am healthy, above 18 years old, and eligible to
                donate blood.
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-200">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Donar;

import React, { useState } from "react";
import useAuth from "../../store/Authstore";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import { BloodRequestapi } from "../../service/Api";
import { useNavigate } from "react-router-dom";

const Reciever = () => {
  const navgation = useNavigate();
  const { bloodlist, blooddata } = useAuth();
  const [loading, setloading] = useState(false);
  const { tostStyle } = useAuth();
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    bloodGroup: "",
    unitsBlood: "",
    hospitalName: "",
    doctorName: "",
    age: "",
    contactNumber: "",
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
      setloading(true);
      const responsed = await BloodRequestapi(formData);
      const datas = await responsed.json();

      if (responsed.ok) {
        toast.success(datas.message, tostStyle);

        setFormData({
          patientName: "",
          gender: "",
          bloodGroup: "",
          unitsBlood: "",
          hospitalName: "",
          doctorName: "",
          age: "",
          contactNumber: "",
        });
        console.log(datas);
      } else {
        toast.error(datas.message, tostStyle);
        console.log(datas);
      }
    } catch (err) {
      throw new Error("Blood Request error", err);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute top-[50%] left-[40%] sm:left-[48%]">
          <Loading height={70} width={70} />
        </div>
      )}
      <span
        className="rounded-full font-extrabold  text-[30px] text-red-700 hover:bg-red-600 px-2 hover:text-white absolute cursor-pointer duration-100 sm:top-[100px] sm:left-7 top-[80px]"
        onClick={() => {
          navgation(-1);
        }}>
        ←
      </span>
      <div className="bg-gray-100  py-16 px-2 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-5 sm:p-10">
          <h2 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent  mb-6">
            {blooddata + " "}Blood Request Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-[14px]">
            {/* Patient Name & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  autoComplete="none"
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
            </div>
            {/* Gender & Blood Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  autoComplete="none"
                  required
                  className="w-full border text-gray-700  rounded-xl p-2 focus:outline-none ">
                  <option hidden className="text-gray-700"></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Blood Group Required
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  className="w-full border  text-gray-700 rounded-xl p-2 focus:outline-none ">
                  <option hidden className="text-gray-700"></option>
                  {bloodlist.map((item, indes) => {
                    return (
                      <option key={indes} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Units & Hospital */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Units Required
                </label>
                <input
                  type="number"
                  name="unitsBlood"
                  value={formData.unitsBlood}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  placeholder="e.g. 2 units"
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hospital Name
                </label>
                <input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
            </div>
            {/* Doctor & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Doctor's Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  autoComplete="none"
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
              </div>
            </div>
            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                autoComplete="none"
                onChange={handleChange}
                required
                className="w-full border  rounded-xl p-2 focus:outline-none "
              />
            </div>
            {/* Consent */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="w-5 h-5 accent-red-600"
              />
              <label className="text-gray-700">
                I confirm that the information provided above is accurate.
              </label>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold px-10 py-2 rounded-full shadow-lg hover:bg-red-700 transition duration-200">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reciever;

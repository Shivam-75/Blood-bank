import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../store/Authstore";
import { toast } from "react-toastify";
import Loading from "../components/loading/Loading";
import { RegistrationApies } from "../service/Api";

const Signup = () => {
  const navigate = useNavigate();
  const { listitems, tostStyle, setShowLogin } = useAuth();
  const [loding, setloading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    emailId: "",
    password: "",
    number: "",
    state: "",
    city: "",
    distic: "",
    landMark: "",
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

      const response = await RegistrationApies(formData);
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, tostStyle);
        setFormData({
          Name: "",
          emailId: "",
          password: "",
          number: "",
          state: "",
          city: "",
          distic: "",
          landMark: "",
        });

        navigate("/login");
      } else {
        toast.error(data.message, tostStyle);
      }
    } catch (error) {
      throw new Error("Registration Error", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-[15px] my-8 sm:p-10 rounded-[10px] shadow-2xl w-[90vmin] ">
          <h2 className="text-[20px] font-bold text-center  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent  mb-6">
            Register Hospital or Blood Bank
          </h2>

          {loding && (
            <div className="absolute left-[37%] top-[50%] sm:absolute sm:top-[45%] sm:left-[47%] ">
              <Loading height={70} width={70} />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 text-[14px]">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                autoComplete="none"
                className="w-full border  rounded-xl p-2 focus:outline-none "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email id
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                autoComplete="none"
                required
                className="w-full border  rounded-xl p-2 focus:outline-none "
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Mobile No
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                autoComplete="none"
                onChange={handleChange}
                required
                className="w-full border  rounded-xl p-2 focus:outline-none  "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="none"
                required
                className="w-full border  rounded-xl p-2 focus:outline-none  "
              />
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  State
                </label>
                <input
                  list="states"
                  onChange={handleChange}
                  value={formData.state}
                  autoComplete="none"
                  name="state"
                  className="w-full border  rounded-xl p-2 focus:outline-none "
                />
                <datalist id="states">
                  {listitems.map((item, index) => {
                    return <option key={index} value={item} />;
                  })}
                </datalist>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  District
                </label>
                <input
                  type="text"
                  name="distic"
                  autoComplete="none"
                  value={formData.distic}
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none  "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none  "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Landmark
                </label>
                <input
                  type="text"
                  name="landMark"
                  value={formData.landMark}
                  autoComplete="none"
                  onChange={handleChange}
                  required
                  className="w-full border  rounded-xl p-2 focus:outline-none  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-200">
              {loding ? "Loading......" : " Sign Up"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => {
                setShowLogin(true);
              }}
              className="text-red-600 font-semibold hover:underline cursor-pointer">
              LogIn
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

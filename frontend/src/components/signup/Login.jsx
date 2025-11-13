import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../store/Authstore";
import Loading from "../loading/Loading";
import { LoginApi } from "../../service/Api";

const Login = () => {
  const navigate = useNavigate();
  const { tostStyle, setTokenLocalStorage, setShowLogin } = useAuth();
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
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

      const response = await LoginApi(formData);
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, tostStyle);
        setFormData({
          emailId: "",
          password: "",
        });
        setTokenLocalStorage(true);
        navigate("/");
        console.log(data);
      } else {
        toast.error(data.message, tostStyle);
        console.log(data);

        navigate("/Signup");
      }
    } catch (error) {
      throw new Error("Login error", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-[15px] sm:p-10 rounded-[10px] shadow-2xl w-[90vmin] ">
        <h2 className="text-[25px] font-bold text-center  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent  mb-4">
          Login
        </h2>

        {loading && (
          <div className="absolute left-[37%] top-[50%] sm:absolute sm:top-[45%] sm:left-[47%] ">
            <Loading height={70} width={70} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 text-[14px]">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Id
            </label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
              className="w-full border  rounded-xl p-2 focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border  rounded-xl p-2 focus:outline-none  "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-200">
            {loading ? "Loading....." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          I dont have account?{" "}
          <span
            onClick={() => {
              setShowLogin(false);
            }}
            className="text-red-600 font-semibold hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

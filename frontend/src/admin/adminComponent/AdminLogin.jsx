import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";
import useAuth from "../../store/Authstore";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { tostStyle, AdminLogin, AdminTokenfnSet, AdminTokenfnRemove } =
    useAuth();
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
    setloading(true);
    try {
      const response = await AdminLogin(formData);

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, tostStyle);
        setFormData({
          emailId: "",
          password: "",
        });
        navigate("/skillvertex/Admin/login/Dashboard");
        AdminTokenfnSet();
      } else {
        toast.error(data.message, tostStyle);
        AdminTokenfnRemove();
      }
    } catch (err) {
      throw new Error("Admin Error ", err);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-[15px] sm:p-10 rounded-[10px] shadow-2xl w-[90vmin] ">
        <h2 className="text-[25px] font-bold text-center  bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent  mb-4">
          Admin Login
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
      </div>
    </div>
  );
};

export default AdminLogin;

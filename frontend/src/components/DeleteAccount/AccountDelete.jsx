import React, { useState } from "react";
import { deleteAccount } from "../../service/Api";
import { toast } from "react-toastify";
import useAuth from "../../store/Authstore";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

const AccountDelete = () => {
  const { tostStyle, removerToken } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: "", accountdelete: "" });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.accountdelete.trim() !== "Delete my Account") {
      toast.error('Please type "Delete my Account" correctly.', tostStyle);
      return;
    }

    setLoading(true);
    try {
      const response = await deleteAccount(formData);
      const data = response?.json ? await response.json() : response;

      if (response.ok || data?.success) {
        toast.success(
          data?.message || "Account deleted successfully",
          tostStyle
        );
        removerToken();
        setFormData({ password: "", accountdelete: "" });
        navigate("/Signup");
      } else {
        toast.error(data?.message || "Failed to delete account", tostStyle);
      }
    } catch (err) {
      console.error("Account delete error:", err);
      toast.error("Something went wrong. Please try again.", tostStyle);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="  flex justify-center items-center h-[90vh]">
      <span
        className="rounded-full font-extrabold  text-[30px] text-red-700 hover:bg-red-600 px-2 hover:text-white absolute cursor-pointer duration-100 sm:top-[100px] sm:left-7 left-4 top-[80px]"
        onClick={() => {
          navigate(-1);
        }}>
        ←
      </span>
      <div className="py-10 relative sm:mx-5 w-[90vmin] sm:w-[80vmin]">
        {/* Header */}
        <div className="flex items-center justify-center h-[80px] sm:h-[100px] font-extrabold font-serif">
          <h1 className="text-[27px] sm:text-2xl md:text-3xl lg:text-4xl text-center bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
            Delete Your Account
          </h1>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-10">
            <Loading height={70} width={70} />
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="shadow-2xl mb-4 bg-white rounded-lg  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-10 text-[14px] font-bold relative z-0 ">
          <div className="flex flex-col">
            <label className="py-2 text-gray-600">Enter Your Password</label>
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="border bg-transparent text-gray-600 h-10 border-gray-300 outline-none rounded-md px-3"
            />
          </div>

          <div className="flex flex-col">
            <label className="py-2 text-gray-600">
              Type <strong>Delete my Account</strong> below
            </label>
            <input
              type="text"
              required
              name="accountdelete"
              value={formData.accountdelete}
              onChange={changeHandler}
              className="border h-10 text-gray-600 bg-transparent border-gray-300 outline-none rounded-md px-3"
            />
          </div>

          <div className="flex justify-center sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`border border-red-600 h-10 rounded-md w-full transition duration-300 ${
                loading
                  ? "bg-red-400 cursor-not-allowed"
                  : "hover:bg-red-600 hover:text-white"
              }`}>
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountDelete;

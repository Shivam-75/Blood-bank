import React from "react";
import { useNavigate } from "react-router-dom";

const AdminError = () => {
  const navbar = useNavigate();
  return (
    <div className="h-[90vh] bg-slate-100 flex justify-center items-center">
      <div className=" h-[300px] flex flex-col justify-center gap-6">
        <h1 className="mx-auto text-[40px]  font-extrabold ">Page Not Found</h1>
        <div className=" flex">
          <button
            className="bg-red-700 py-2 px-8 rounded-md text-white mx-5 hover:bg-green-500 delay-100"
            onClick={() => {
              navbar(-1);
            }}>
            Go Back ←
          </button>
          <button
            className="bg-red-700 py-2 px-4 rounded-md text-white mx-5 hover:bg-green-500 delay-100 "
            onClick={() => {
              navbar("/");
            }}>
            Home Page →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminError;

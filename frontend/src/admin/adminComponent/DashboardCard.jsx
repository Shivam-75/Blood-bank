import React from "react";

const DashboardCard = ({ userreq, uda, messageheader }) => {
  //min-w-[330px]
  return (
    <div className="shadow-2xl font-serif font-extrabold h-[150px]   bg-white rounded-lg m-2 p-4  hover:scale-105 duration-150">
      <h1 className="text-[19px] text-center sm:text-[20px]  px-6 text-red-800 ">
        {messageheader}
      </h1>
      <div className="flex items-center  gap-x-6">
        <div className=" flex items-center">
          <span className=" text-[20px] px-1">🧞‍♀️</span>
          <h1 className=" sm:text-[18px]">{userreq}</h1>
        </div>
        <p className=" sm:text-[20px] my-4 ">{uda}</p>
      </div>
    </div>
  );
};

export default DashboardCard;

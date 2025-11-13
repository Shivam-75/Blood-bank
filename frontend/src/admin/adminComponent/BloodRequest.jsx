import React from "react";

const BloodRequest = () => {
  return (
    <div className="h-[90vmin] py-8 overflow-y-scroll bg-slate-100 font-serif">
      <h1 className="text-[30px] font-extrabold text-center py-7">
        Blood Request List
      </h1>
      <table className=" w-[100%]  sm:w-[95%] m-auto ">
        <thead className="border border-red-700 h-[50px] ">
          <tr className="text-center text-[10px] sm:text-[15px]">
            <th>Name</th>
            <th>age</th>
            <th>Number</th>
            <th>Blood Group</th>
            <th>Distic</th>
            <th>Aprove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="shadow-md  h-[40px] sm:h-[50px] overflow-y-scroll text-[10px] sm:text-[14px] shadow-red-700 text-center  ">
            <td>fds</td>
            <td>fds</td>
            <td>fds</td>
            <td>fds</td>
            <td>Distic</td>
            <td className="cursor-pointer transition duration-300">
              <button className=" py-1 px-3 rounded-md bg-red-700 text-white hover:bg-green-500 duration-150 ">
                Aprove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodRequest;

import React from "react";

const Search = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-100 font-serif ">
      <div className=" p-3 grid grid-cols-1 gap-4 sm:grid-cols-2  my-6">
        <input
          type="text"
          placeholder="Search Donar distic"
          className="border border-black py-2  px-2  rounded-md outline-none bg-transparent w-[250px]"
        />
        <button className="bg-red-700 py-2  rounded-md  text-white  outline-cyan-500 outline-2 outline outline-offset-2 hover:bg-green-600 duration-150 w-[120px] ">
          Search
        </button>
      </div>
      <h1 className="py-4 text-[30px] font-serif font-extrabold">
        Donar Search
      </h1>
      <div className="w-[95%] h-[90vh]  overflow-y-scroll">
        <table className=" w-[100%]  sm:w-[100%] m-auto">
          <thead className="border border-red-700 h-[50px] ">
            <tr className="text-center text-[10px] sm:text-[15px]">
              <th>Name</th>
              <th>age</th>
              <th>Number</th>
              <th>Blood Group</th>
              <th>Distic</th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow-md  h-[40px] sm:h-[50px] overflow-y-scroll text-[10px] sm:text-[14px] shadow-red-700 text-center  ">
              <td>fds</td>
              <td>fds</td>
              <td>fds</td>
              <td>fds</td>
              <td>Distic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Search;

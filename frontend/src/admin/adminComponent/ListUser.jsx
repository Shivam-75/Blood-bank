import { createElement, useState } from "react";

const ListUser = () => {
  //const [sezize, setsize] = useState({ x: "", y: "" });

  //const handle = (e) => {
  //  setsize({ x: e.clientX, y: e.clientY });
  //};

  //console.log(sezize);

  //if (sezize) {
  //  const a = document.createElement("a");
  //  document.body.appendChild(a);
  //  return (
  //    <h1 className="h-[90vh]" onMouseMove={handle}>
  //      {sezize.x} <br />
  //      {sezize.y}
  //    </h1>
  //  );
  //}
  return (
    <div className="h-[90vh] py-8 overflow-y-scroll bg-slate-100 ">
      <h1 className="text-[33px] font-extrabold text-center py-7">User List</h1>
      <table className=" w-[100%]  sm:w-[95%] m-auto ">
        <thead className="border border-red-700 h-[50px] ">
          <tr className="text-center text-[10px] sm:text-[15px]">
            <th>Name</th>
            <th className="hidden">Email</th>
            <th>Number</th>
            <th className="">landMark</th>
            <th className="hidden">Distic</th>
            <th>City</th>
            <th className="hidden">state</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="shadow-md  h-[40px] sm:h-[50px] overflow-y-scroll text-[10px] sm:text-[14px] shadow-red-700 text-center  ">
            <td>fdsfds </td>
            <td className="hidden">shivam@9794</td>
            <td>9794321273</td>
            <td className="hidden">madhwaliya khushinagar</td>
            <td>Maharajganj</td>
            <td>Siswa bazar</td>
            <td className="hidden">up</td>
            <td className="cursor-pointer transition duration-300">
              <button className=" py-1 px-3 rounded-md bg-red-700 text-white hover:bg-green-500 duration-150  ">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;

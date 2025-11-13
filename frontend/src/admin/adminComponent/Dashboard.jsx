import React from "react";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className=" bg-slate-100 sm:h-[90vh]">
      <h1 className="font-serif sm:text-[30px] font-extrabold text-center sm:py-9">
        Dashboard Analyser
      </h1>
      <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto">
        <DashboardCard
          userreq={"User Data"}
          uda={12}
          messageheader={"Blood Request "}
        />
        <DashboardCard
          userreq={"User Data"}
          uda={19}
          messageheader={"Donar Request "}
        />
        <DashboardCard
          userreq={"Total Data"}
          uda={200}
          messageheader={"Registered Hospital "}
        />
        <DashboardCard
          userreq={"A+"}
          uda={"100 L"}
          messageheader={"Blood Stock "}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import { Outlet, useNavigate } from "react-router-dom";
const SetingNavar = () => {
  const navigate = useNavigate();
  const settingButtons = ["Delete Account"];
  return (
    <section className=" h-[90vh] overflow-y-scroll bg-slate-100 flex flex-col md:flex-row">
      <div className=" grid grid-cols-2 sm:flex  md:flex-col items-center pt-3  gap-3   px-4   border-x border-red-600 md:w-[230px] md:pt-[50px] ">
        {settingButtons.map((item, index) => (
          <button
            className=" py-3 w-[80%] rounded-md text-white bg-red-700 hover:bg-green-600 text-[13px]  "
            key={index}
            onClick={() => {
              navigate(item);
            }}>
            {item}
          </button>
        ))}
      </div>
      <div className="m-auto">
        <Outlet />
      </div>
    </section>
  );
};

const Setting = () => {
  return <SetingNavar />;
};

export default Setting;

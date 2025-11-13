import { NavLink } from "react-router-dom";
import useAuth from "../store/Authstore";

const NavAdmin = () => {
  const { isAdmin } = useAuth();

  const linkStyle = ({ isActive }) =>
    `font-bold transition ${
      isActive
        ? "text-cyan-700 underline underline-offset-4 "
        : "text-red-700 hover:text-black"
    }`;

  const List = ["Dashboard", "DonarList", "RequestList", "UserList", "Search"];
  return (
    <>
      {isAdmin ? (
        <nav className="sm:h-[90vh] px-7 bg-slate-100 border border-r-black sm:w-[200px] sm:flex sm:justify-center sm:items-center">
          {/* 🧭 Desktop Menu */}
          <ul className="py-6 grid grid-cols-3 sm:flex sm:flex-col  flex-wrap justify-evenly  sm:justify-center sm:gap-y-9 gap-x-6">
            {List.map((name, index) => (
              <li key={index}>
                <NavLink to={name} className={linkStyle}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default NavAdmin;

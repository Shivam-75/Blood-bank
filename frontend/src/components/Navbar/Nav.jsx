import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../store/Authstore";
import { LogoutUser } from "../../service/Api";
import { toast } from "react-toastify";

export default function Nav() {
  const { isLogin, removerToken, tostStyle, isAdmin, AdminTokenfnRemove } =
    useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // 🧭 Define navigation links dynamically
  const navItems = isLogin
    ? [
        { name: "Home", to: "/" },
        { name: "Camp", to: "/Camp" },
        { name: "Donar ", to: "/Donar" },
        { name: "Blood Request", to: "/Request" },
        { name: "Question", to: "/Question" },
        { name: "Account Delete", to: "/delete" },
      ]
    : [{ name: "Home", to: "/" }];

  const handleLogout = async () => {
    try {
      const response = await LogoutUser();
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, tostStyle);
        removerToken();
        AdminTokenfnRemove();
      } else {
        toast.error(data.message, tostStyle);
      }
    } catch (err) {
      console.error("Logout Error:", err);
      toast.error("Something went wrong!", tostStyle);
    }
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Common NavLink style handler
  const linkStyle = ({ isActive }) =>
    `font-bold transition ${
      isActive
        ? "text-cyan-700 underline underline-offset-4 "
        : "text-red-700 hover:text-black"
    }`;

  return (
    <nav className="sticky top-0 left-0 z-20 h-[70px] w-full bg-white shadow-md flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-gray-700">
      {/* 🩸 Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src="/save.png" alt="Save Life Logo" className="h-[50px]" />
        {isAdmin ? (
          <h2 className="font-serif text-red-700 text-3xl   font-bold">
            Admin
          </h2>
        ) : (
          <h2 className="font-serif text-red-700 text-3xl   font-bold">
            Save Life
          </h2>
        )}
      </NavLink>

      {/* 🧭 Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10">
        {navItems.map(({ name, to }) => (
          <li key={name}>
            <NavLink to={to} className={linkStyle}>
              {name}
            </NavLink>
          </li>
        ))}

        {isLogin ? (
          <li>
            <button
              onClick={handleLogout}
              className="font-bold text-red-700 hover:text-black transition ">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/login" className={linkStyle}>
              Login
            </NavLink>
          </li>
        )}
      </ul>

      {/* 🍔 Mobile Toggle Button */}
      <button
        aria-label="Menu"
        className="lg:hidden inline-flex active:scale-90 transition"
        onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round">
          <path d="M3 7h24M3 14h24M3 21h24" />
        </svg>
      </button>

      {/* 📱 Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white border-t border-gray-200 p-6 lg:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}>
        <ul className="flex flex-col space-y-4 text-sm">
          {navItems.map(({ name, to }) => (
            <li key={name}>
              <NavLink to={to} className={linkStyle} onClick={closeMenu}>
                {name}
              </NavLink>
            </li>
          ))}

          {isLogin ? (
            <li>
              <button
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
                className="font-bold text-red-700 hover:text-black transition">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={linkStyle} onClick={closeMenu}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

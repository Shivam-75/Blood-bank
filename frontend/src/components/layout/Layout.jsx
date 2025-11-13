import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Navbar/Footer";
import useAuth from "../../store/Authstore";
import Login from "../signup/Login";
import Signup from "../../page/Signup";

const MemoizedNav = memo(Nav);
const MemoizedFooter = memo(Footer);

const ComponentsData = () => (
  <div className="flex flex-col min-h-screen bg-white text-gray-900">
    <header className="sticky top-0 z-50 shadow-md">
      <MemoizedNav />
    </header>
    <main className="flex-1">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20 text-gray-500 text-sm animate-pulse">
            Loading content...
          </div>
        }>
        <Outlet />
      </Suspense>
    </main>
    <footer className="mt-auto">
      <MemoizedFooter />
    </footer>
  </div>
);

const Layout = () => {
  const { isLogin, showLogin } = useAuth();

  console.log(isLogin);
  if (isLogin) return <ComponentsData />;

  return <>{showLogin ? <Login /> : <Signup />}</>;
};

export default Layout;

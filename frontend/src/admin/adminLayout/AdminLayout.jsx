import { Outlet } from "react-router-dom";
import NavAdmin from "../NavAdmin";
import AdminLogin from "../adminComponent/AdminLogin";
import useAuth from "../../store/Authstore";

const ComponentsLayout = () => {
  return (
    <section className="flex flex-col sm:flex-row ">
      <NavAdmin />
      <div className="w-[100%]">
        <Outlet />
      </div>
    </section>
  );
};

const AdminLayout = () => {
  const { isAdmin } = useAuth();
  return <>{isAdmin ? <ComponentsLayout /> : <AdminLogin />}</>;
};

export default AdminLayout;

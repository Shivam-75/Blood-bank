import Login from "./components/signup/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Capm from "./page/Capm";
import Donar from "./page/Donar";
import Signup from "./page/Signup";
import Bloodcategory from "./page/Bloodcategory";
import Reciever from "./components/ReqBlood/Reciever";
import AccountDelete from "./components/DeleteAccount/AccountDelete";
import Layout from "./components/layout/Layout";
import AdminLayout from "./admin/adminLayout/AdminLayout";
import DonarRequest from "./admin/adminComponent/DonarRequest";
import BloodRequest from "./admin/adminComponent/BloodRequest";
import ListUser from "./admin/adminComponent/ListUser";
import AdminError from "./admin/AdminError";
import Search from "./admin/adminComponent/Search";
import Dashboard from "./admin/adminComponent/Dashboard";
import AdminLogin from "./admin/adminComponent/AdminLogin";
import ChatGpt from "./components/loading/ChatGpt";
import useAuth from "./store/Authstore";

const App = () => {
  const { isAdminLogin, isLogin } = useAuth();

  const admin = isAdminLogin || false;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <AdminError />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Camp",
          element: <Capm />,
        },
        {
          path: "Donar",
          element: <Donar />,
        },
        {
          path: "Request",
          element: <Bloodcategory />,
        },
        {
          path: "BloodRequest-form",
          element: <Reciever />,
        },
        {
          path: "Question",
          element: <ChatGpt />,
        },
        {
          path: "delete",
          element: <AccountDelete />,
        },
        {
          path: "skillvertex/Admin/login",
          element: <AdminLayout />,
          children: [
            {
              path: "DonarList",
              element: <DonarRequest />,
            },
            {
              path: "RequestList",
              element: <BloodRequest />,
            },
            {
              path: "UserList",
              element: <ListUser />,
            },
            {
              path: "Search",
              element: <Search />,
            },
            {
              path: "Dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;

/*  
        
        {
         
           
            //{
            //  path: "login",
            //  element: <AdminLogin />,
            //},
            {
              path: "*",
              element: <AdminError />,
            },
          ],
        }
      : {
          path: "/",
          element: <AdminLayout />,
          children: [
            {
              path: "login",
              element: <AdminLogin />,
            },
            {
              path: "login",
              element: <AdminLogin />,
            },
          ],
        },
        
        */

/*  
        
        */

/*      

{
         
        },



*/

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Bounce } from "react-toastify";
import { RefreshToken } from "../service/Api";

const Auth = createContext(null);

export const AuthProvider = ({ children }) => {
  const [blooddata, setblooddata] = useState("");
  const listitems = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Jammu and Kashmir",
  ];

  const tostStyle = {
    position: "top-right",
    autoClose: 2000,
    theme: "dark",
    transition: Bounce,
  };

  const [loginToken, setToekn] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const isLogin = loginToken;

  const setTokenLocalStorage = async (token = true) => {
    localStorage.setItem("isLogin", token ? "true" : "false");
    setToekn(true);
  };
  const removerToken = () => {
    localStorage.removeItem("isLogin");
    location.reload();
    setToekn(false);
  };

  //? login Authentication
  const userDataFached = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/v1/user/login`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("User login data:", data);
        return;
      } else {
        if (data.err === "jwt expired") {
          console.log("JWT expired, trying refresh...");

          const res = await RefreshToken();
          const refreshData = await res.json();

          if (res.ok) {
            console.log("Refresh success", refreshData);
            setTokenLocalStorage(true);
            userDataFached();
          } else {
            console.log("Refresh failed:", refreshData);
            removerToken();
          }
        }
      }

      console.log("Login shivam failed:", data);
      if (data.success === false) {
        removerToken();
        console.log("shivam", data.message);
      }
    } catch (err) {
      throw new Error("Login Data Error: " + err);
    }
  }, [isLogin]);

  useEffect(() => {
    userDataFached();
  }, [isLogin]);

  //! admin setitem data

  const AdminLogin = async (formData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/v1/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      return response;
    } catch (err) {
      throw new Error("Admin Frontend Error", err);
    }
  };

  //? Admin Login data
  const [adminTokendt, setAdminToken] = useState(
    localStorage.getItem("dtAdmins")
  );

  const isAdmin = !!adminTokendt;
  const AdminTokenfnSet = (data = true) => {
    setAdminToken(data);
    localStorage.setItem("dtAdmins", data);
  };
  const AdminTokenfnRemove = () => {
    return localStorage.removeItem("dtAdmins");
  };

  //? important this is part of
  const [showLogin, setShowLogin] = useState(true);

  const bloodlist = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  return (
    <Auth.Provider
      value={{
        tostStyle,
        listitems,
        setTokenLocalStorage,
        bloodlist,
        setblooddata,
        blooddata,
        isLogin,
        removerToken,
        showLogin,
        setShowLogin,
        AdminLogin,
        AdminTokenfnRemove,
        isAdmin,
        AdminTokenfnSet,
      }}>
      {children}
    </Auth.Provider>
  );
};

const useAuth = () => {
  const AuthContext = useContext(Auth);

  if (!AuthContext) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return AuthContext;
};

export default useAuth;

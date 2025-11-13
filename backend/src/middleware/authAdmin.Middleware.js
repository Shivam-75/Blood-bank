import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const AdminCheckerMiddleware = async (req, res, next) => {

  const { AdminAccessToken } = req.cookies || req.body;
  try {

    if (!AdminAccessToken) {
      return res.status(401).json({ message: "Unauthorized Access !! ", success: false });
    }
    const UserVerify = await jwt.verify(AdminAccessToken, process.env.ADMIN_SECREAT_TOKEN)

    if (!UserVerify) {
      return res.status(401).json({ message: "Credentail Error Token Expire !!", success: false });
    }

    const UserDetails = await User.findById({ _id: UserVerify.id }).select("-password -refreshToken");

    req.admin = UserDetails.isAdmin;
    req.adminData = UserDetails;

    next();

  } catch (err) {
    return res.status(500).json({ message: "Server Error Admin Middleware", success: false, err: err.message });
  }
}
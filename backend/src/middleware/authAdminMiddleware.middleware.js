import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const AuthSecurity = async (req, res, next) => {
    const token = req.cookies?.AccessToken;

    try {
        if (!token) {
            return res.status(401).json({ message: "UnAuthorize Access jwt expired", success: false });
        }

        const decodeUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if (!decodeUser) {
            return res.status(400).json({ message: "token expire", success: false });
        }
        const UserFind = await User.findById(decodeUser._id).select("-password -refreshToken");

        if (!UserFind) {
            return res.status(400).json({ message: "User Not Found !! ", success: false });
        }

        req.user = UserFind;
        next()

    } catch (err) {
        return res.status(500).json({ message: "Auth Problem ", success: false, err: err.message });
    }


}

//? admin auth middle ware

export const AdminUser = async (req, res, next) => {
    try {

        const admin = req.user?.isAdmin;
        if (!admin) {
            return res.status(401).json({ message: "User not a Admin", success: false });
        }

        next();

    } catch (err) {
        return res.status(500).json({ message: "Admin Auth Problem ", success: false, err: err.message });
    }
}
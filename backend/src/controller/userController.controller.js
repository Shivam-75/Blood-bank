import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken"


//? genertate Aceess and Refresh token

const AccessAndRefreshToekn = async function (UserId) {
    try {
        const UserFindById = await User.findById(UserId);
        const AccessToken = await UserFindById.generateAccessToken();
        const RefreshToken = await UserFindById.generateRefreshToken();

        UserFindById.refreshToken = RefreshToken;
        await UserFindById.save({ validateBeforeSave: false });
        return { AccessToken, RefreshToken }
    } catch (error) {
        throw new Error("Access And Refresh Token Not Generate ", "Token Generate Function ", error);
    }
}

export const userRegistrationControler = async (req, res) => {
    const { Name, emailId, number, password, landMark, city, distic, state } = req.body



    try {
        if (!Name || !emailId || !number || !password || !landMark || !city || !distic || !state) {
            return res.status(401).json({
                message: "All Column are Required !!", success: false
            });
        }
        const UserExist = await User.findOne({ emailId });
        if (UserExist) {
            return res.status(400).json({ message: "Try Another Email And Hospital Name !!", success: false });
        }
        const UserRegistered = await User.create({
            Name, emailId, number, password, landMark, city, distic, state
        })
        const UserRegisteredSearch = await User.findById(UserRegistered._id).select("-password -refreshToken ");
        if (!UserRegisteredSearch) {
            return res.status(401).json({ message: "Something Error During Registration !! ", success: false });
        }
        return res.status(200).json({ message: "User Registered Successfully !! ", data: UserRegisteredSearch, success: true });
    } catch (err) {
        return res.status(500).json({ message: "Server Error Registrtaion !!", success: false, err: err.message });

    }

}


//todo Get Register User Data

export const userRegistrationData = async (req, res) => {
    const userData = await User.find().select("-password -refreshToken");

    try {
        if (!userData) {
            return res.status(400).json({ message: "Data Not Found !!", success: false });
        }
        return res.status(200).json({ message: "Successfully Data Feched !!", success: true, data: userData });
    } catch (err) {
        return res.status(500).json({ message: "Server Error Registrtaion !!", success: false, err: err.message });

    }
}

//? Login User apies

export const userLoginController = async (req, res) => {
    const { emailId, password } = req.body;

    try {

        if (!emailId || !password) {
            return res.status(400).json({ message: "Fill All Column !!", success: false })
        }
        const userSeraching = await User.findOne({ emailId })
        if (!userSeraching) {
            return res.status(400).json({ message: "User Not Exist Try Another Email & Password !!", success: false });
        }
        const validPassword = await userSeraching.passwordCompare(password);
        if (!validPassword) {
            return res.status(400).json({ message: "Credentail Error !!", success: false });
        }
        const { AccessToken, RefreshToken } = await AccessAndRefreshToekn(userSeraching._id);
        const loginUser = await User.findById(userSeraching._id).select("-password -refreshToken")
        const Optionvalidation = {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 30 * 24 * 60 * 60 * 1000
        }
        return res.status(200)
            .cookie("AccessToken", AccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 15 * 60 * 1000
            })
            .cookie("RefreshToken", RefreshToken, Optionvalidation)
            .json({ message: "Successfully User Login !!", data: { loginUser, RefreshToken, AccessToken }, success: true });
    } catch (err) {
        return res.status(500).json({ message: "Server Error Login  !!", success: false, err: err.message });

    }

}

//? userLogin Details

export const userProfile = async (req, res) => {
    const user = req.user;

    try {
        if (!user) {
            return res.status(401).json({ message: "Token Not Found !!", success: false });
        }
        return res.status(200).json({ message: "User Data Succesfully Fatched !!", success: true, data: user });
    } catch (err) {
        return res.status(500).json({ message: "Server Error User profile !!", success: true, err: err.message });


    }
}

export const refreshToken = async (req, res) => {
    const token = req.cookies?.RefreshToken;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized Request !!", success: false });
    }
    try {

        const decodeToken = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

        const findUserData = await User.findById(decodeToken._id).select("-password");

        if (!findUserData) {
            return res.status(403).json({ message: "invalid refresh token !! ", success: false });
        }

        if (RefreshToken !== findUserData?.refreshToken) {
            return res.status(401).json({ message: "Refresh token is expired !!", success: false });
        }

        const option = {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 30 * 24 * 60 * 60 * 1000
        }

        const { AccessToken, RefreshToken } = await AccessAndRefreshToekn(findUserData._id);

        return res.status(200)
            .cookie("AccessToken", AccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 15 * 60 * 1000
            })
            .cookie("RefreshToken", RefreshToken, option)
            .json({ message: "Successfully refresh the tokens !!", data: { AccessToken, RefreshToken }, success: true });

    } catch (err) {
        return res.status(400).json({ message: "Invalid Refresh Token !!", success: false, err: err.message });
    }
}


//? Logout or Remove refresh token

export const Logout = async (req, res) => {
    const user = req.user?._id;

    try {
        const updateUserRefreshtoken = await User.findByIdAndUpdate(user, { refreshToken: 1 }, { new: true })

        const option = {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }
        return res.status(200)
            .clearCookie("AccessToken", option)
            .clearCookie("RefreshToken", option)
            .clearCookie("AdminAccessToken", option)
            .json({ message: "Successfully User Logout !!", success: true });

    } catch (err) {
        return res.status(500).json({ message: "Server Error logout  !!", success: false, err: err.message });
    }

}

//? delete Account

export const deleteUserAccount = async (req, res) => {
    const { password, accountdelete } = req.body;

    const emailId = req.user?.emailId;

    try {

        const check = accountdelete.trim();

        if (check !== "Delete my Account") {
            return res.status(400).json({ message: "Write Delete my Account !!", success: false });
        }

        const finduserdetails = await User.findOne({ emailId });

        if (!finduserdetails) {
            return res.status(400).json({ message: "User not Found  !!", success: false })
        }
        const verifyUserPassword = await finduserdetails.passwordCompare(password);

        if (!verifyUserPassword) {
            return res.status(400).json({ message: "Invalid Passaword !!", success: false });
        }

        const deleteAccount = await User.deleteOne({ emailId });

        if (!deleteAccount) {
            return res.status(400).json({ message: "Account not Deleted !!", success: false });
        }
        const option = {
            httpOnly: true,
            secure: true,
            sameSite: "none",

        }

        return res.status(200)
            .clearCookie("AccessToken", option)
            .clearCookie("RefreshToken", option)
            .json({ message: "Account Successfully Deleted !!", success: true });

    } catch (err) {
        return res.status(500).json({ message: "Server Error user not delete !!", success: false, err: err.message })
    }
}
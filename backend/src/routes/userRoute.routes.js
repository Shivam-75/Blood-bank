import { Router } from "express";
import { deleteUserAccount, Logout, refreshToken, userLoginController, userProfile, userRegistrationControler, userRegistrationData } from "../controller/userController.controller.js";
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";

export const Userrouters = Router();

Userrouters.route("/Registration").post(userRegistrationControler).get(AuthSecurity, userRegistrationData);
Userrouters.route("/login").post(userLoginController).get(AuthSecurity, userProfile);
Userrouters.route("/refreshToken").post(refreshToken)
Userrouters.route("/logout").post(AuthSecurity, Logout);
Userrouters.route("/Account-delete").delete(AuthSecurity, deleteUserAccount);


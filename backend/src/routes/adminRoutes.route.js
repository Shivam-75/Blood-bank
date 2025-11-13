import { Router } from "express";
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";
import { userProfile } from "../controller/userController.controller.js";
import { adminDetailChecker, AdminLoginProfile } from "../controller/testController.controller.js";
import { AdminCheckerMiddleware } from "../middleware/authAdmin.Middleware.js";


export const AdminRoute = Router();


AdminRoute.route("/AdminDetail").get(AuthSecurity, userProfile);

AdminRoute.route("/login").post(AdminLoginProfile).get(AdminCheckerMiddleware, adminDetailChecker)



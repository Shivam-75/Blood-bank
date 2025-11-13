import { Router } from "express"
import { bloodRequestController } from "../controller/bloodController.controller.js";
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";

export const BloodRequestRoute = Router();

BloodRequestRoute.route("/bloodRequest").post(AuthSecurity, bloodRequestController);


import { Router } from "express"
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";
import { AddcampController, GetCampDetails } from "../controller/campController.controller.js";


export const CampRoutes = Router();

CampRoutes.route("/CampDetails").post(AuthSecurity, AddcampController).get(AuthSecurity, GetCampDetails)

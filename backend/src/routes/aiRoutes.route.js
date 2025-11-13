import { Router } from "express";
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";
import { AiHandler } from "../controller/testController.controller.js";


export const AiRoutes = Router();

AiRoutes.route("/response").post(AuthSecurity, AiHandler);


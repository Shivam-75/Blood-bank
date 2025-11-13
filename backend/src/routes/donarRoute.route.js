import { Router } from "express";
import { AuthSecurity } from "../middleware/authAdminMiddleware.middleware.js";
import { donarController, getDonarController } from "../controller/donarController.controller.js";


export const DonarRoute = Router();

DonarRoute.route("/DonarList").post(AuthSecurity, donarController).get(AuthSecurity, getDonarController);


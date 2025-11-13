import express from "express";
import { config } from "dotenv";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";

import Database from "./src/database/database.js";
import { Userrouters } from "./src/routes/userRoute.routes.js";
import { AdminRoute } from "./src/routes/adminRoutes.route.js";
import { AiRoutes } from "./src/routes/aiRoutes.route.js";
import { BloodRequestRoute } from "./src/routes/bloodrequest.route.js";
import { DonarRoute } from "./src/routes/donarRoute.route.js";
import { CampRoutes } from "./src/routes/campRoute.route.js";


config({ path: "./.env" });

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: [ "GET", "POST", "DELETE", "PUT", "PATCH" ],
  })
);


app.use(compression());
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true, limit: "50kb" }));
app.use(cookieParser());


app.use("/api/v1/user", Userrouters);
app.use("/api/v1/donar", DonarRoute);
app.use("/api/v1/camp", CampRoutes);
app.use("/api/v1/request", BloodRequestRoute);
app.use("/api/v1/ai", AiRoutes);
app.use("/api/v1/admin", AdminRoute)


app.get("/", (req, res) => {
  res.send("Welcome");
})

Database()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed!", err.message);
    process.exit(1);
  });

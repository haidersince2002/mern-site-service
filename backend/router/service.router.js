import { Router } from "express";
import services from "../controllers/service.controller.js";

const router = Router();

router.route("/service").get(services);

export default router;

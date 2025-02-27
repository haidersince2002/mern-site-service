import { Router } from "express";
import contactForm from "../controllers/contact.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { contactSchema } from "../validators/auth.validator.js";

const router = Router();

router.route("/contact").post(validate(contactSchema), contactForm);

export default router;

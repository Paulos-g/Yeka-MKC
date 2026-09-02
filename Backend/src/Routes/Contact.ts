import { Router } from "express";
import { postContact } from "../Controller/contactController.js";

const router = Router();

router.post("/post", postContact);

export default router;

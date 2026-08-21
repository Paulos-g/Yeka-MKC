import { initializeDonation } from "../Controller/donationController";
import { Router } from "express";

const router = Router();

router.post("/initialize-donation", initializeDonation);
export default router;

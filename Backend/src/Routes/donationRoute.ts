import { handleDonationCallback } from "../Controller/chapaCallBack.js";
import { initializeDonation } from "../Controller/donationController.js";
import { Router } from "express";

const router = Router();

router.post("/initialize-donation", initializeDonation);
router.get("/callback", handleDonationCallback);
export default router;

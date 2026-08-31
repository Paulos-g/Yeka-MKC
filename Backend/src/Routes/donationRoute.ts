import { handleDonationCallback } from "../Controller/chapaCallBack";
import { initializeDonation } from "../Controller/donationController";
import { Router } from "express";

const router = Router();

router.post("/initialize-donation", initializeDonation);
router.get("/callback", handleDonationCallback);
export default router;

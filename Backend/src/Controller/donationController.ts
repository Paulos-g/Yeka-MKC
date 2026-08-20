import dotenv from "dotenv";
import { Request, Response } from "express";
import { supabase } from "../configs/supabase";
import { v4 as uuidv4 } from "uuid";

interface DonationFormData {
  amount: number;
  donation_purpose: string;
  donor_firstName: string;
  donor_lastName: string;
  donor_phone: string;
  currency?: string;
}
interface Donation {
  id: string;
  donor_name: string;
  donor_phone_number: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  tx_ref: string;
  created_at: string;
}
dotenv.config();

export const initializeDonation = async (req: Request, res: Response) => {
  try {
    const {
      donor_firstName,
      donor_lastName,
      donor_phone,
      amount,
      donation_purpose,
      currency = "ETB",
    } = req.body as DonationFormData;

    // Validate user input
    if (
      !donor_firstName ||
      !donor_lastName ||
      !donor_phone ||
      !amount ||
      !donation_purpose
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Create values on the backend
    const donor_name = `${donor_firstName} ${donor_lastName}`;
    const status: Donation["status"] = "pending";
    const tx_ref = `church-donation-${uuidv4()}`;

    // Save pending donation
    const { data: donation, error } = await supabase
      .from("donations")
      .insert({
        donor_name,
        donor_phone_number: donor_phone,
        amount,
        donation_purpose,
        currency,
        status,
        tx_ref,
      })
      .select()
      .single();

    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    return res.status(201).json({
      donation,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

import dotenv from "dotenv";
import { Request, Response } from "express";
import { supabase } from "../configs/supabase.js";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

interface DonationFormData {
  amount: number;
  donation_purpose: string;
  donor_firstName: string;
  donor_lastName: string;
  donor_phone: string;
  donor_email: string;
  currency?: string;
}

function toChapaPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("251") && digits.length === 12) {
    return `0${digits.slice(3)}`;
  }

  if (digits.startsWith("0") && digits.length === 10) {
    return digits;
  }

  return digits;
}

export const initializeDonation = async (req: Request, res: Response) => {
  try {
    const {
      donor_firstName,
      donor_lastName,
      donor_phone,
      donor_email,
      amount,
      donation_purpose,
      currency = "ETB",
    } = req.body as DonationFormData;

    const phone_number = toChapaPhone(donor_phone);

    if (
      !donor_firstName ||
      !donor_lastName ||
      !donor_phone ||
      !donor_email ||
      !amount ||
      !donation_purpose
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    if (!/^0[79]\d{8}$/.test(phone_number)) {
      return res.status(400).json({
        error: "Phone must be 09xxxxxxxx or 07xxxxxxxx",
      });
    }

    const donor_name = `${donor_firstName} ${donor_lastName}`;
    const status = "pending";
    const tx_ref = `donation-${uuidv4()}`;

    // 1. Save pending donation
    const { data: donation, error } = await supabase
      .from("donations")
      .insert({
        donor_name,
        donor_phone_number: phone_number,
        amount: Number(amount),
        donation_purpose,
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

    // 2. Initialize payment with Chapa
    const chapaResponse = await fetch(process.env.CHAPA_BASE_URL!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: String(amount),
        currency,
        email: donor_email,
        first_name: donor_firstName,
        last_name: donor_lastName,
        phone_number,
        tx_ref,
        callback_url: `${process.env.BACKEND_URL}/api/donations/callback`,
        return_url: `${process.env.FRONTEND_URL}/success`,
        customization: {
          title: "MKC Donation",
          description: donation_purpose,
        },
      }),
    });

    const chapaData = await chapaResponse.json();

    if (!chapaResponse.ok) {
      return res.status(400).json({
        error: "Failed to initialize Chapa payment",
        details: chapaData,
      });
    }

    // 3. Give checkout URL to frontend
    return res.status(201).json({
      donation,
      success: true,

      checkout_url: chapaData.data.checkout_url, // to redirect my customer to chapa's payment page
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const payment = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

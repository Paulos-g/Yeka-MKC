import { supabase } from "../configs/supabase.js";
import { Request, Response } from "express";

export const postContact = async (req: Request, res: Response) => {
  try {
    const { full_name, email, message } = req.body;

    if (!full_name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Full name, email, and message are required" });
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert({ full_name, email, message })
      .select();

    if (error) throw error;

    return res.status(201).json({
      success: true,
      message: "Contact message sent successfully",
      data,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
};

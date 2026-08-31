import axios from "axios";
import { supabase } from "../configs/supabase";

export const handleDonationCallback = async (req: Request, res: Response) => {
  try {
    console.log("Chapa callback received:");
    console.log(req.query);

    const { trx_ref, ref_id, status } = req.query;

    console.log("Transaction:", trx_ref);
    console.log("Chapa Reference:", ref_id);
    console.log("Status:", status);
    if (!trx_ref) {
      return console.log("Error Missing transaction Reference");
    }

    const chapaResponse = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${trx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      },
    );

    const payment = chapaResponse.data;

    if (payment.status === "success") {
      const { data, error } = await supabase
        .from("donations")
        .update({
          status: "completed",
        })
        .eq("tx_ref", trx_ref)
        .select();

      if (error) {
        throw error;
      }

      console.log("Donation completed:", data);
    }

    return res.status(200).json({
      message: "Callback processed",
    });
  } catch (error) {
    console.error("Callback error:", error);
  }
};

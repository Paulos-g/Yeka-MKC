import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env file.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function checkSupabaseConnection() {
  const { error } = await supabase.from("users").select("id").limit(1); //"I only need one row

  if (error) {
    console.error("Supabase connection failed:", error);
    process.exit(1);
  }

  console.log(" Supabase connected successfully");
}

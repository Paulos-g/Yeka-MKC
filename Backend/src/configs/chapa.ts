export const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY as string;
export const CHAPA_BASE_URL = "https://api.chapa.co/v1";

if (!CHAPA_SECRET_KEY) {
  throw new Error("CHAPA_SECRET_KEY is missing in .env");
}

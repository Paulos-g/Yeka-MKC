import express from "express";
import { Prisma } from "@prisma/client/extension";
import { checkSupabaseConnection } from "./configs/supabase";
import donationRoute from "./Routes/donationRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/donations", donationRoute);

const PORT = process.env.PORT || 3000;
console.log("PORT:", PORT);

app.get("/", (req, res) => {
  // res.send("Hello from Typescript backend");
  res.sendStatus(200);
});

console.log(process.env.CHAPA_SECRET_KEY);

const startServer = async () => {
  await checkSupabaseConnection();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

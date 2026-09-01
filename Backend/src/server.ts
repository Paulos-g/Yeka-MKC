import express from "express";
import { Prisma } from "@prisma/client/extension";
import { checkSupabaseConnection } from "./configs/supabase.js";
import donationRoute from "./Routes/donationRoute.js";
import dotenv from "dotenv";
import contact from "./Routes/Contact.js";
import { setServers } from "node:dns/promises";
import cors from "cors";
dotenv.config();

setServers(["1.1.1.1", "8.8.8.8"]); // used because the DNS resolver of windows is unable to resolve the mongodb domain.

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/donations", donationRoute);
app.use("/api/contact", contact);

const PORT = process.env.PORT || 3000;
console.log("PORT:", PORT);

app.get("/", (req, res) => {
  // res.send("Hello from Typescript backend");
  res.sendStatus(200);
});

const startServer = async () => {
  await checkSupabaseConnection();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

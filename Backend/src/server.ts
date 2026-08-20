import express from "express";
import { Prisma } from "@prisma/client/extension";
import { checkSupabaseConnection } from "./configs/supabase";

const app = express();

const PORT = 8989;

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

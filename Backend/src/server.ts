import express from "express";

const app = express();

const PORT = 8989;

app.get("/", (req, res) => {
  res.send("Hello from Typescript backend");
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server stated listnenig on port ${PORT}`);
});

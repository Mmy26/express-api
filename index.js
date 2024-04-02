import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.get("/api", cors(), (req, res) => {
  const param = { value: "This is sample API." };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

app.get("/api/hello", cors(), (req, res) => {
  const param = { value: "Hello World!" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

app.listen(port, () => {
  console.log("Server is running!");
});

export default app;

import express from "express";

const app = express();

app.get("/", (red, res) => {
  return res.json({ message: "Hello Word" });
});

app.listen(3333, () => {
  console.log("server started on port 33333");
});

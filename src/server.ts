import express from "express";

const app: express.Application = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("TypeScript With Express");
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV}mode on port ${PORT}`
  );
});

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.get("/app/v1/product", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

app.listen(port, () => {
  console.log(`Your server is running at port ${port}`);
});

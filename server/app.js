const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const userRoute = require("./routes/user.route");

app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.get("/app/v1/product", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});
app.use("/app/v1/user", userRoute);

module.exports = app;

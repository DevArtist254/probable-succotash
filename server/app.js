const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const errorController = require("./controller/err.controller");

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "http://mjidb.devartist.art/", // must match your frontend origin
      credentials: true, // allow cookies to be sent
    })
  );
} else {
  app.use(
    cors({
      origin: "http://localhost:8080", // must match your frontend origin
      credentials: true, // allow cookies to be sent
    })
  );
}

app.use(cookieParser());

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  if (process.env.NODE_ENV === "development")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  if (process.env.NODE_ENV === "production")
    res.setHeader("Access-Control-Allow-Origin", "http://mjidb.devartist.art/");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval'; object-src 'none';"
  );
  next();
});

app.use("/app/v1/product", productRoute);
app.use("/app/v1/user", userRoute);

app.use(errorController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

module.exports = app;

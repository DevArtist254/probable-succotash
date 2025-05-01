const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const userRoute = require("./routes/user.route");
const errorController = require("./controller/err.controller");
app.use(
  cors({
    origin: "http://localhost:8080", // must match your frontend origin
    credentials: true, // allow cookies to be sent
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'none';",
      "script-src 'self' 'unsafe-eval' https://unpkg.com/leaflet@1.9.4/dist/leaflet.js;",
      "style-src 'self' 'unsafe-inline' https://unpkg.com/leaflet@1.9.4/dist/leaflet.css https://fonts.googleapis.com;",
      "font-src 'self' https://fonts.gstatic.com;",
      "img-src 'self' data: https://*;",
      "connect-src 'self';",
      "frame-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
    ].join(" ")
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.get("/app/v1/product", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});
app.use("/app/v1/user", userRoute);

app.use(errorController);

module.exports = app;

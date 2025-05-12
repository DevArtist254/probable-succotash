const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const userRoute = require("./routes/user.route");
const errorController = require("./controller/err.controller");

if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "http://j0k400sc0k80gwwcs8kcgkow.devartist.art", // must match your frontend origin
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
    res.setHeader(
      "Access-Control-Allow-Origin",
      "http://j0k400sc0k80gwwcs8kcgkow.devartist.art"
    );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self' 'unsafe-eval'",
      "script-src 'self' 'unsafe-eval' https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://unpkg.com https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://* http://j0k400sc0k80gwwcs8kcgkow.devartist.art",
      "script-src 'self' 'unsafe-eval' http://j0k400sc0k80gwwcs8kcgkow.devartist.art",
      "style-src 'self' 'unsafe-inline' http://j0k400sc0k80gwwcs8kcgkow.devartist.art",
      "connect-src 'self'",
      "frame-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
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

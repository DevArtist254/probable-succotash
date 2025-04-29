const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/app/v1/product", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

app.listen(port, () => {
  console.log(`Your server is running at port ${port}`);
});

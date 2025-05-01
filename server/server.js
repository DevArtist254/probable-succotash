require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB connected successfully");
  } catch (err) {
    console.log("An error has on accessing the db");
  }
}

connectDB();

const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`Your server is running at port ${port}`);
});

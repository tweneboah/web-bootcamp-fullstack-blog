require("dotenv").config();
const mongoose = require("mongoose");

//db connect function

const dbConnect = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/web-bootcamp-blog-app");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB has connected succesfully");
  } catch (error) {
    console.log("Db connection failed", error.message);
  }
};

module.exports = dbConnect;

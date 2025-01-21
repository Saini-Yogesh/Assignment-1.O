const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in the environment variables.");
  process.exit(1);
}

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Error connecting to the database: ", err);
    process.exit(1);
  }
};

module.exports = connectDB;

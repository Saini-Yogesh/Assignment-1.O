const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const connectWithDB = require("./config/db.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Recommended for handling JSON requests

// Connect to the database
connectWithDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});

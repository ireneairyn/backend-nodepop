"use strict";

// Loading libraries
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Event to handle errors
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error", err);
  process.exit(1);
});

// Event that shows a message when the connection has been established
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB at", mongoose.connection.name);
});

// Conection to the database
mongoose.connect("mongodb://127.0.0.1/nodepopAds");

module.exports = mongoose.connection;

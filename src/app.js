const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Endpoint: ${req.url}, Response status: ${res.statusCode}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running"
  });
});

module.exports = app;

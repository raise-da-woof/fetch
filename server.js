// ====== DEPENDENCIES ======
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const chalk = require("chalk");
const PORT = process.env.PORT || 3001;
const app = express();

// ====== MIDDLEWARE ======
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ====== ROUTES ======
app.use(routes)

// ====== DATABASE ======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fetch");

// ====== START SERVER ======
app.listen(PORT, function() {
  console.log(chalk.green(`API Server now listening on PORT http://localhost:${PORT}`));
});
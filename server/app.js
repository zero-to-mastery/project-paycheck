if (process.env.NODE_ENV !== 'production') require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

const indexRouter = require("./routes/index");

const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "client/build")));

// If you want to use a database on the cloud then just chage this URL to point to it
const databaseUrl = `mongodb://${process.env.DB_HOST}/projectpaycheck`;
const databaseOptions = {
  useNewUrlParser: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD
};
console.log(databaseOptions)
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(databaseUrl, databaseOptions)
  .then(() => console.log("Connected to the database"))
  .catch(err => {
    console.log(`Could not connect to the database: ${err.message}`);
    process.exit();
  });

app.use("/", indexRouter);

module.exports = app;

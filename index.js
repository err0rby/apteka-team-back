require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOSER);
    console.log("Подключились к базе");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Подключились к серверу");
});

start();

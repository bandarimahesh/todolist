const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute.js");
const itemRoute = require("./routes/itemRoute.js");
const cors = require("cors");
const path = require("path");
dotenv.config();

mongoose.connect(process.env.MONGO_CLIENT_URL, (err, client) => {
  if (err) throw err;
  console.log("Connected to database");
});

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3100;
app.use("/v1/auth", authRoute);
app.use("/v1/item", itemRoute);

app.use(express.static(path.join(__dirname, "/client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(port, (req, res) => {
  console.log(`Server running at ${port}`);
});

const mongoose = require("mongoose");

const ItemModel = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      default: new Date(),
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("items", ItemModel);

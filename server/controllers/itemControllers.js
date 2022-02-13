const ItemModel = require("../models/itemModel.js");

exports.addItem = async (req, res) => {
  try {
    const newItem = new ItemModel({
      name: req.body.newItem,
    });
    const item = await newItem.save();
    if (item) {
      res.send({ success: "New Item added successfully" });
    } else {
      res.send({ error: "There was an error saving the item" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

exports.getItem = async (req, res) => {
  try {
    const allItems = await ItemModel.find();
    if (allItems) {
      res.send(allItems);
    } else {
      res.send("No items found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

exports.editItem = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  try {
    const findItems = await ItemModel.findById({ _id: req.params.id });
    if (findItems) {
      const updatedItem = await ItemModel.findByIdAndUpdate(id, {
        $set: { name: name },
      });
      if (updatedItem) {
        res.send({ success: "Item updated successfully" });
      } else {
        res.send({ error: "There was an error while updating the item" });
      }
    } else {
      res.send("No items found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

exports.deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const findItems = await ItemModel.findById({ _id: req.params.id });
    if (findItems) {
      const deletedItem = await ItemModel.findByIdAndDelete({ _id: id });
      if (deletedItem) {
        res.send({ success: "Item deleted successfully" });
      } else {
        res.send({ error: "There was an error while deleting the item" });
      }
    } else {
      res.send("No items found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

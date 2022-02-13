const router = require("express").Router();
const {
  getItem,
  addItem,
  editItem,
  deleteItem,
} = require("../controllers/itemControllers.js");

router.get("/get", getItem);
router.post("/new", addItem);
router.put("/edit/:id", editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;

const UserModel = require("../models/authModel");

exports.loginController = (req, res, next) => {};

exports.registerController = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    user && res.status(400).json("This email is registered ,Please login");

    const newUser = UserModel({
      email: req.body.email,
      password: req.body.password,
    });
    const response = await newUser.save();
    const { password, ...others } = response._doc;
    res.send(others);
  } catch (error) {}
};

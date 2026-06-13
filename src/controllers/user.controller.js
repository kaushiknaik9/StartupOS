const ApiError = require("../utils/ApiError");
const User = require("../models/User");

const getallUser = async (req, res) => {
  try {
    const filter = {};
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const sort = req.query.sort || "createdAt";
    const skip = (page - 1) * limit;

    if (req.query.search) {
      filter.name = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    const users = await User.find(filter).skip(skip).limit(limit).sort(sort);

    return res.status(201).json({
      success: true,
      totaldata: users.length,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getuser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      throw new ApiError(404, "User not Found");
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw new ApiError(404, "User Not Found");
    }
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      throw new ApiError(404, "User Not Found");
    }
    return res.status(200).json({
      success: true,
      message: `deleted Success`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getallUser, getuser, createUser, updateUser, DeleteUser };

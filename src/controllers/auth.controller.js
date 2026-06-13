const User = require("../models/User");
const ApiError = require("../utils/ApiError");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new ApiError(400, "Email already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User Registration Success",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(
        404,
        "Invalid Credentials Either password or email is incorrect",
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new ApiError(
        400,
        "Invalid Credentials Either password or email is incorrect",
      );
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    return res.status(200).json({
      success: true,
      message: "Login Success",
    });
  } catch (err) {
    return res.status(500).json({
      success: true,
      message: err.message,
    });
  }
};

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  return res.status(200).json({
    success: true,
    data: user,
  });
};

module.exports = { registerUser, loginUser, getCurrentUser };

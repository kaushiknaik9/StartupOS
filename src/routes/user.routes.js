const {
  CreateUserValidator,
  UpdateUserValidator,
} = require("../validators/user.validator");
const validate = require("../middleware/validate.middleware");

const express = require("express");

const {
  getallUser,
  getuser,
  createUser,
  updateUser,
  DeleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getallUser);
router.get("/:id", getuser);
router.post("/", CreateUserValidator, validate, createUser);
router.patch("/:id", UpdateUserValidator, validate, updateUser);
router.delete("/:id", DeleteUser);

module.exports = router;

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
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", DeleteUser);

module.exports = router;

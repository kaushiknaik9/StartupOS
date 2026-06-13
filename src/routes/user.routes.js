const express = require("express");

const {
  getallUser,
  getuser,
  createUser,
  DeleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getallUser);
router.get("/:id", getuser);
router.post("/", createUser);
router.delete("/:id", DeleteUser);

module.exports = router;

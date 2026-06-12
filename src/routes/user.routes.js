const express = require("express");

const { createUser } = require("../controllers/user.controller");
const { crossOriginResourcePolicy } = require("helmet");

const router = express.Router();

router.post("/", createUser);

module.exports = router;

const { body } = require("express-validator");

const CreateUserValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is Required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email Address"),
];

const UpdateUserValidator = [
  body("name")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Min Lenght Should be 3"),

  body("email").optional().isEmail().withMessage("Email Format is Invalid"),
];

module.exports = { CreateUserValidator, UpdateUserValidator };

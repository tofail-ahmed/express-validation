const { check } = require("express-validator");

exports.userSignUpValidation = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Name must have at least 6 characters")
    .isLength({ max: 31 })
    .withMessage("Name cannot exceed 31 characters"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("You must have an eamil adress")
    .isEmail()
    .withMessage("You must submit a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters")
    .isLength({ max: 21 })
    .withMessage("Password cannot exceed 31 characters"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("dob field can not be empty")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid Date"),
];
exports.userLoginValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("You must have an eamil adress")
    .isEmail()
    .withMessage("You must submit a valid email"),
    check("password")
    .trim()
    .notEmpty()
    .withMessage("Password field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters")
    .isLength({ max: 21 })
    .withMessage("Password cannot exceed 31 characters"),
];

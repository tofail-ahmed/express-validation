const { body, validationResult } = require("express-validator");

const validationByExpress=body("name")
    .trim()
    .notEmpty()
    .withMessage("Name field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Name must have at least 6 characters")
    .isLength({ max: 31 })
    .withMessage("Name cannot exceed 31 characters"),
    body('email')
    .trim()
    .notEmpty()
    .withMessage("You must have an eamil adress")
    .isEmail()
    .withMessage("You must submit a valid email"),
    body("password")
    .trim()
    .notEmpty()
    .withMessage("Password field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters")
    .isLength({ max: 21 })
    .withMessage("Password cannot exceed 31 characters"),
    body("dob")
    .trim()
    .notEmpty()
    .withMessage("dob field can not be empty")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid Date"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next(); // Move to the next middleware or route handler if there are no errors
  }

  module.exports=validationByExpress
const express = require("express");
const userRoute = express.Router();
const { body, validationResult } = require("express-validator");

//creating new user----------
userRoute.post(
  "/register",
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name field can not be empty")
    .isLength({ min: 6 })
    .withMessage("Name must have at least 6 characters")
    .isLength({ max: 31 })
    .withMessage("Name cannot exceed 31 characters"),
  body("email")
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
  },
  (req, res) => {
    try {
      const { name, email, password, dob } = req.body;
      const newUser = {
        name,
        email,
        password,
        dob,
      };
      return res.status(201).json({
        message: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
);
//login
userRoute.post(
  "/login",

  body("email")
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

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next(); // Move to the next middleware or route handler if there are no errors
  },
  (req, res) => {
    try {
      const { email, password } = req.body;
      const user = {
        email,
        password,
      };
      if (
        email === "atofail50@gmail.com" &&
        password === "atofail50@gmail.com"
      ) {
        return res.status(201).json({
          message: "User logged in successfully",
          data: user,
        });
      } else {
        res.send({
          message: "Invalid user credentials provided",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports=userRoute;

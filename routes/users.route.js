const express = require("express");
const userRoute = express.Router();
const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation/auth");
const {
  userSignUpValidation,
  userLoginValidation,
} = require("../validation/validation");
const {
  userRegisterController,
  userLoginControoller,
} = require("../controllers/user.controller");

//creating new user----------
userRoute.post(
  "/register",
  userSignUpValidation,
  runValidation,
  userRegisterController
);
//login
userRoute.post(
  "/login",
  userLoginValidation,
  runValidation,
  userLoginControoller
);


module.exports=userRoute;

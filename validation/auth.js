const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      let errorsList=errors.array().map((error)=>error.msg)
    return res.status(400).json({
      errors: errorsList,
    });
  }
  next(); // Move to the next middleware or route handler if there are no errors
};

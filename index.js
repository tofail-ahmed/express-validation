const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
app.get("/", (req, res) => {
  res.send("server is running");
});

//creating new user----------
app.post(
  "/api/register",
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
app.post(
  "/api/login",

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
      }else{
        res.send({
          message:"Invalid user credentials provided"
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
);

app.use((req, res, next) => {
  res.send(
    `
    <h1 style="text-align:center; color:red;">404 error!! Bad or invalid url request</h1>
    `
  );
});



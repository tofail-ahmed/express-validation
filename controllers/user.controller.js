const userRegisterController = (req, res) => {
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
};
const userLoginControoller = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = {
      email,
      password,
    };
    if (email === "atofail50@gmail.com" && password === "atofail50@gmail.com") {
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
};

module.exports = { userRegisterController, userLoginControoller };

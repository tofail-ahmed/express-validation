const express = require("express");
const { body, validationResult } = require("express-validator");
const userRoute = require("./routes/users.route");

const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",userRoute)
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
app.get("/", (req, res) => {
  res.send("server is running");
});


app.use((req, res, next) => {
  res.send(
    `
    <h1 style="text-align:center; color:red;">404 error!! Bad or invalid url request</h1>
    `
  );
});



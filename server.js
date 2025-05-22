const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT;
app.use("/user", userRoutes);
app.use(bodyParser.json()); // convert all the body into json format
app.use(bodyParser.urlencoded({ extended: true })); // convert encode the url that we are sending
app.get("/", (req, res) => {
  res.send("hello to server ");
});
console.log(PORT);
app.listen(PORT, () => {
  console.log("app,listening");
});

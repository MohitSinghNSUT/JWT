const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const db = require("./Database/db_Mongo.js");
// connect the data base
const PORT = process.env.PORT;
app.use(express.json());

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

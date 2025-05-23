const mongoose = require("mongoose");
const url = "mongodb://mongoadmin:secret123@localhost:27017";

const db = mongoose
  .connect(url)
  .then((res) => {
    console.log("connection to db");
    return res;
  })
  .catch((err) => {
    console.log(err);
    return err;
  });
module.exports = db;

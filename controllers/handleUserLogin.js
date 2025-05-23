const personModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const handleLogin = async (req, res) => {
  try {
    const data = await personModel.findOne(req.body);
    if (data == null) {
      res.status(404).send({ error: "Data Does Not Exists" });
    } else {
      jwt.sign(
        req.body,
        process.env.VERIFY_TOKEN,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            res.status(500).send({ error: err });
          }
          res.status(201).send({ msg: "user loggedIn", token });
        }
      ); //jwt sign generate the token and send to client ,payload,
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
module.exports = handleLogin;

const personModel = require("../models/userSchema");
const handleSignUp = async (req, res) => {
  try {
    console.log(req.body);
    const data = await personModel.findOne({ email: req.body.email });
    console.log(data);
    if (data !== null) {
      res.status(400).send({ error: "Data Already Exists" });
    } else {
      const save = await personModel.create(req.body);
      console.log(save);
      res.status(201).send({ msg: "user created" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
module.exports = handleSignUp;

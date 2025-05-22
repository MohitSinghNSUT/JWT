const personModel = require("../routes/userRoutes.js");
const handleSignUp = async (req, res) => {
  try {
    const data = await personModel.findOne(req.body);
    if (data !== null) {
      res.status(400).error({ error: "Data Already Exists" });
    } else {
      const save = await personModel.create(req.body);
      res.status(201).send({ msg: "user created" });
    }
  } catch (err) {
    res.status(500).error({ error: err});
  }
};
module.exports = handleSignUp;

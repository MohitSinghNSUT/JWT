const personModel = require("../routes/userRoutes.js");
const handleLogin = async (req, res) => {
  try {
    const data = await personModel.findOne(req.body);
    if (data == null ) {
      res.status(404).error({ error: "Data Already Exists" });
    } else {

      res.status(201).send({ msg: "user created" });
    }
  } catch (err) {
    res.status(500).error({ error: err });
  }
};
module.exports = handleLogin;

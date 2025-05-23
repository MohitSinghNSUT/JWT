const jsonwebtoken = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const token = bearerToken.split(" ")[1];
  console.log(token);
  const verify = jsonwebtoken.verify(
    token,
    process.env.VERIFY_TOKEN,
    (err, decode) => {
      if (err) res.status(400).send({ err: "Error in Token" });
      else {
        console.log(decode);
        req.user_data = decode;
        next();
      }
    }
  );
};
module.exports = verifyToken;

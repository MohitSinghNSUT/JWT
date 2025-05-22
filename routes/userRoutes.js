const express = require("express");
const handleSignUp = require("../controllers/handleUserSignUp");
const routes = express.Router();
routes.get("/signup", handleSignUp);
module.exports = routes;

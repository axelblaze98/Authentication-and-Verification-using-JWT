const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

const auth = require("../Java Web Tokens/VerifyingToken.js");
const registration = require("../Database/Register and Login.js");

router.use(bodyparser.json());

router.post("/register", (req, res) => {
  registration.register(req, res);
});

router.post("/login", (req, res) => {

  registration.login(req, res);
});

router.use(auth);
router.get("/User", (req, res) => {
  res.send(req.user.username);
});

module.exports = router;

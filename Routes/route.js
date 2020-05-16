const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const accessTokenSecret = "Hello World";
const auth = require("../Auth/verify.js")

router.use(bodyparser.json());

var values = require("../credentials.json");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = values.find((u) => {
    return u.username == username && u.password == password;
  });
  if (user) {
    const accessToken = jwt.sign(
      { username: user.username },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username and Password in correct");
  }
});

router.get("/",(req, res) => {
    res.send("Hello User");
})

router.use(auth);
router.get("/User",(req,res) => {
  res.send(req.user.username)
})

module.exports = router
const jwt = require("jsonwebtoken");

const accessTokenSecret = "Hello World";

token = (usname, res) => {
    const accessToken = jwt.sign({ username: usname }, accessTokenSecret);
    res.json({ accessToken });
}

module.exports = token;
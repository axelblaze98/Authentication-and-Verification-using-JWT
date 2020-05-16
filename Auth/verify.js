const accessTokenSecret = "Hello World";
const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                res.send(err);
            }
                req.user = user;
                next();
        })
    }
    else {
        res.sendStatus("403")
    }
};
module.exports = authenticateJWT
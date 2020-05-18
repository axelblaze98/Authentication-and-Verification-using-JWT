const user = require("./schema.js");

const jwt = require("jsonwebtoken");
const accessTokenSecret = "Hello World";

register = (req, res) => {
    
    const { usname, psswrd } = req.body;
    
    user.create(
        {
            username: usname,
            password: psswrd,
        },
        (err, data) => {
            if (err) {
                console.log(err);
                res.send("Error Occured during Registration")
            } else {
                console.log(data);
                res.send("Registration Successful")
            }
        })
    user.find({},(err, data)=>{
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
};

login = (req, res) => {
    const { usname, psswrd } = req.body;

    user.findOne({ username: usname, password: psswrd },
    (err, data) => {
        if (err) {
            console.log(err)
        }    
        else if (data) {
            const accessToken = jwt.sign(
            { username: usname },
            accessTokenSecret
            );

            res.json({accessToken});
        }
        else
        {
            res.send("Username and Password in correct");
        }
    })
}


module.exports = {
    register,
    login
}
    

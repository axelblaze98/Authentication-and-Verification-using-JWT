const user = require("./schema.js");
const token = require("../Java Web Tokens/GeneratingToken.js")

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
            console.log(err);
        }    
        else if (data) {
            token(usname, res);
        }
        else {
            res.send("Incorrect Username or Password")
        }   
    })
}


module.exports = {
    register,
    login
}
    

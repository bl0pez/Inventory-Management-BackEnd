const User = require("../models/User");

const emailExist = async(req, res, next) => {

    const { email } = req.body

    const emailExist = await User.findOne({email});

    if(emailExist){
        res.status(400)
        throw new Error("Email ya registrado")
    }

    
    next();

}

module.exports = {
    emailExist,
}
const generateJWT = require("../helpers/generateJWT");
const User = require("../models/User");

const register = async(req, res, next) => {

    const {name, email, password} = req.body;

    try {
        
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            ok: true,
            user,
            token: generateJWT(user._id)
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Please contact the administrator'
        })
    }

}



module.exports = {
    register,
}
const generateJWT = require("../helpers/generateJWT");
const User = require("../models/User");

const register = async (req, res, next) => {

    const { name, email, password } = req.body;

    try {

        const user = await User.create({
            name,
            email,
            password
        });

        const token = generateJWT(user._id);

        //Send token in a cookie
        res.cookie('token', token, {
            path: '/',
            httpOnly: true,
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
            sameSite: 'none',
            secure: true
        });

        res.status(201).json({
            ok: true,
            user,
            token,
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Please contact the administrator'
        });
    }

}

const login = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'Email o password incorrectos'
            });
        }

        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) {
            return res.status(400).json({
                ok: false,
                message: 'Email o password incorrectos'
            });
        }

        const token = generateJWT(user._id);

        //Send token in a cookie
        res.cookie('token', token, {
            path: '/',
            httpOnly: true,
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({
            ok: true,
            user,
            token,
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Please contact the administrator'
        });
    }


}


const logout = async (req, res, next) => {
    try {
        res.cookie('token', '', {
            path: '/',
            httpOnly: true,
            expires: new Date(0),
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({
            ok: true,
            message: 'Cierre de sesion exitoso'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Please contact the administrator'
        });
    }
}



module.exports = {
    register,
    login,
    logout,
}
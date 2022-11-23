const User = require("../models/User");
const { verifyJWT } = require("../helpers/generateJWT");

const authMiddleware = async(req, res, next) => {
  try {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            ok: false,
            message: 'Usted no tiene autorizacion'
        });
    }

    //Verificamos si el token es valido
    if(!verifyJWT(token)){
        return res.status(401).json({
            ok: false,
            message: 'Usted no tiene autorizacion'
        });
    }

    const { _id } = verifyJWT(token);

    const user = await User.findById(_id);

    if(!user){
        return res.status(401).json({
            ok: false,
            message: 'Usuario no existe'
        });
    }

    req.user = user;
    next();

  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        message: 'Please contact the administrator'
    });
  }
}

module.exports = authMiddleware;

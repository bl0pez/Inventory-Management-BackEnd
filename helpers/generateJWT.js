var jwt = require('jsonwebtoken');

/**
 * genera un token 
 * @param {*} _id Recibe el id del usuario
 * @returns Retorna el token
 */
const generateJWT = (_id) => {
    
    const secret = process.env.JWT_SECRET;

    return jwt.sign({ _id }, secret, { expiresIn: '2h' });

}


/**
 * 
 * @param {*} token verifica si el token es valido
 * @returns 
 */
const verifyJWT = (token) => {
    
    
    const secret = process.env.JWT_SECRET;
        return jwt.verify(token, secret);
    
}

module.exports = {
    generateJWT,
    verifyJWT
};
var jwt = require('jsonwebtoken');


const generateJWT = (_id) => {
    
    const secret = process.env.JWT_SECRET;

    return jwt.sign({ _id }, secret, { expiresIn: '2h' });

}

module.exports = generateJWT;
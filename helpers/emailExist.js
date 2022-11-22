const User = require('../models/User');

const emailExist = async (email) => {
    
    const user = await User.findOne({
        email
    });

    if(user){
        throw new Error('Email already exist');
    }

}

module.exports = emailExist;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secretKet = 'secretKey';

const generateToken = async (context, userid) => {
    const token = jwt.sign({ userid }, secretKet, {
        expiresIn: '30d'
    });

    // Set the token as a response header instead of a cookie
    // context.res = {
    //     body: JSON.stringify({ message: 'Successfully created!!!!' }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Set-Cookie': `jwt=${token}; HttpOnly; Secure=${process.env.NODE_ENV !== 'development'}; SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}`,
    //     },
    //     status: 201,
    // };

    return token;
};

const verifyToken = async (token) => {
    try{
        const decoded = await jwt.verify(token, secretKet);
        return decoded;
    }
    catch(error){
        throw error;
    }
}



const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
}
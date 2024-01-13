import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

const generateToken = async (userid) => {
    const token = jwt.sign({ userid }, secretKey, { expiresIn: '1h' });
    return token;
};

const verifyToken = async (token) => {
    try{
        const decoded = await jwt.verify(token, secretKey);
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

export { generateToken, verifyToken, hashPassword, comparePassword };
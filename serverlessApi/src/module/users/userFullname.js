import jwt from 'jsonwebtoken';

import { getUsersFullname } from '../database/validateUsers.js'

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

const getUserFullNameHandler = async (request, context) => {
    try {
        const response = await request.json()
        context.log('JavaScript HTTP trigger function processed a request.', response.token);
        const userId = jwt.verify(response.token, secretKey).userid;
        context.log("User id:", userId);
        const userFullName = await getUsersFullname(userId);
        return {
            body: JSON.stringify({ message: userFullName }),
            status: 200,
        };
    } catch (error) {
     
        return {
            body: JSON.stringify({ message: 'Please sign in' }),
            status: 400,
        };
    }
};

export default getUserFullNameHandler;
 
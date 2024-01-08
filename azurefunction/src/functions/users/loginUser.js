const { loginUser } = require('../database/usersConnection');
const { loginRequestSchema } = require('../schemas/usersSchema');
const { validateRequest } = require('../utils/schemaValidator');
const { comparePassword, generateToken, verifyToken } = require('../utils/usersValidate');

const loginUserHandler = async (request, context) => {
    try {
        context.log('Http function was triggered.');

        const userData = await validateRequest(request, loginRequestSchema);
        console.log("🚀 ~ file: loginUser.js:11 ~ loginUserHandler ~ userData:", userData)

        const result = await loginUser(userData);
        //console.log("🚀 ~ file: loginUser.js:13 ~ loginUserHandler ~ result:", userData)
        

        const matchedUser = await comparePassword(userData.Password, result.Password);

        if (result.Email === userData.Email && matchedUser) {
            const token = await generateToken(result);

            const decoded = await verifyToken(token);
            context.log('Decoded token:', decoded);

            // Include the token in the response to be sent to the client
            return context.res = {
                body: JSON.stringify({ message: 'Login successful', token }),
                status: 200,
            };

        } else {
            return context.res = {
                body: JSON.stringify({ message: 'Login failed Invalid credentials' }),
                status: 401, // Unauthorized
            };
        }
    } catch (error) {
        return context.res = {
            body: JSON.stringify({ message: 'Login failed', error: error.message }),
            status: 400,
        };
    }
};

module.exports = loginUserHandler;

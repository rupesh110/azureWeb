const { signUpWithGoogleSchema} = require('../schemas/usersSchema');
const { validateRequest } = require('../utils/schemaValidator');
const { registerUser, isUniqueEmail, loginUser } = require('../database/usersConnection');
const Validator = require('jsonschema').Validator;
const { generateToken } = require('../utils/usersValidate');

const v = new Validator();

const loginMediaUserHandler = async function (request, context) {
    context.log('Http function was triggered.');
    const usersData = await request.json();
    context.log('I am here');
    context.log('User data:', JSON.stringify(usersData));
    
    const validationResult = v.validate(usersData, signUpWithGoogleSchema);
    context.log("🚀 ~ file: loginMediaUser.js:9 ~ loginMediaUserHandler ~ validationResult:", validationResult)
    
    if (!validationResult.valid) {
        return context.res = {
            body: JSON.stringify({ message: 'Validation error' }),
            status: 400,
        };
    }else{
        const isUniqueEmailResponse = await isUniqueEmail(usersData.Email);
        const matchedUser = await loginUser(usersData);
        console.log("🚀 ~ file: loginMediaUser.js:29 ~ loginMediaUserHandler ~ matchedUser:", matchedUser)
        
        const token = await generateToken(context, matchedUser._id.toString());
    
        if (!isUniqueEmailResponse) {
            context.log('Email already exists:', usersData.Email);
            return context.res = {
                body: JSON.stringify({ message: 'Email already exists', token:{token} }),
                status: 409,
            };
        }else{
            const result = await registerUser(usersData);
            context.log("🚀 ~ file: loginMediaUser.js:9 ~ loginMediaUserHandler ~ result", result)
            const token = await generateToken(context, result.insertedId);

            if (matchedUser) {
                const token = await generateToken(context, matchedUser);
                context.log("🚀 ~ file: loginMediaUser.js:9 ~ loginMediaUserHandler ~ token", token)
                return context.res = {
                    body: JSON.stringify({ message: 'Login successful', token:{token}}),
                    status: 200,
                };
            } else {
                return context.res = {
                    body: JSON.stringify({ message: 'Login failed Invalid credentials' }),
                    status: 401, // Unauthorized
                };
            }
        }
    }
}

module.exports = loginMediaUserHandler;
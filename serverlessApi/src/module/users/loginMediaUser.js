import { signUpWithGoogleSchema } from '../schemas/usersSchema.js';
import { registerUser, isUniqueEmail, loginUser } from '../database/usersConnection.js';
import { Validator } from 'jsonschema';
import jwt from 'jsonwebtoken';

const v = new Validator();
const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

const loginMediaUserHandler = async (request, context) => {
    const usersData = await request.json();    

    const validationResult = v.validate(usersData, signUpWithGoogleSchema);

    if (!validationResult.valid) {
        return context.res = {
            body: JSON.stringify({ message: 'Validation error' }),
            status: 400,
        };
    } else {
        const isUniqueEmailResponse = await isUniqueEmail(usersData.Email);
        const matchedUser = await loginUser(usersData);
        console.log("🚀 ~ file: loginMediaUser.js:29 ~ loginMediaUserHandler ~ matchedUser:", matchedUser);

        const token = jwt.sign({ userid: matchedUser?._id?.toString() }, secretKey, { expiresIn: '1h' });
        if (!isUniqueEmailResponse) {
            return context.res = {
                body: JSON.stringify({ message: 'Email already exists', token }),
                status: 409,
            };
        } else {
            const result = await registerUser(usersData);
            const registerForEmail = await registerUser(usersData, 'test', 'logicApp');
            context.log("🚀 ~ file: loginMediaUser.js:9 ~ loginMediaUserHandler ~ result", result);
            const token = jwt.sign({ userid: result?.insertedId?.toString() }, secretKey, { expiresIn: '1h' });

            return context.res = {
                body: JSON.stringify({ message: 'Welcome to this page', token }),
                status: 202,
            };
        }
    }
}

export default loginMediaUserHandler;


import { loginRequestSchema } from '../schemas/usersSchema.js';
import { Validator } from 'jsonschema';
import { loginUser } from '../database/usersConnection.js';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

const v = new Validator();
const loginUserHandler = async (request, context) => {
    try {
        context.log('Http function was triggered.');
        const response = await request.json();  
        const isValidate = v.validate(response, loginRequestSchema);
        
        if(!isValidate.valid){
            return{
                body: JSON.stringify({ message: 'Validation error'}),
                status: 400,
            };
        }
        const result = await loginUser(response);
        context.log("🚀 ~ file: loginUser.js:20 ~ loginUserHandler ~ result", result);
        if(!result){
            return{
                body: JSON.stringify({ message: 'Login failed'}),
                status: 400,
            };
        }
        const token = jwt.sign({ userid: result._id }, secretKey, { expiresIn: '1h' });

        return{
            body: JSON.stringify({ message: 'Validation successfull', token}),
            status: 202,
        }
    } catch (error) {
        return context.res = {
            body: JSON.stringify({ message: 'Login failed', error: error.message }),
            status: 400,
        };
    }
};
export default loginUserHandler;

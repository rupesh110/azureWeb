import { Validator } from 'jsonschema';

import { registerRequestSchema } from '../schemas/usersSchema.js';
import { registerUser, isUniqueEmail } from '../database/usersConnection.js';
//import { generateToken } from '../utils/usersValidate.js';

import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
const v = new Validator();

const registerUserHandler = async (request, context) => {
  try {
    const response = await request.json();

    const result = v.validate(response, registerRequestSchema);
    context.log("🚀 ~ registerUserHandler ~ result:", result)
    if (!result.valid) {
      return {
        body: JSON.stringify({ message: 'Validation error' }),
        status: 400,
      };
    }
    const isUnique = await isUniqueEmail(response.Email);
    if (!isUnique) {
      return {
        body: JSON.stringify({ message: 'Email already exists' }),
        status: 400,
      };
    }
    if (result.valid && isUnique) {
      const result = await registerUser(response);
      context.log("🚀 ~ registerUserHandler ~ result", result)
      //const token = await generateToken(result.userid);
      const token = jwt.sign({ userid: result.userid }, secretKey, { expiresIn: '1h' });
      return {
        body: JSON.stringify({ message: 'Validation success', token}),
        status: 201,
      };
    }
  } catch (error) {
    context.log('Error in Azure Function:', error);
    return {
      body: JSON.stringify({ message: 'Internal Server Error1'}),
      status: 500,
    };
  }
};

export default registerUserHandler;

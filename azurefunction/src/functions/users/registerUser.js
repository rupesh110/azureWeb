const { app } = require('@azure/functions');
const Validator = require('jsonschema').Validator;

const { registerRequestSchema } = require('../schemas/usersSchema');
const { registerUser, isUniqueEmail } = require('../database/usersConnection');
const { hashPassword, generateToken } = require('../utils/usersValidate');


const v = new Validator();

const createUserDetail = async (userData) => {
  return {
    FullName: userData.FullName,
    Email: userData.Email,
    Password: await hashPassword(userData.Password),
  };
};

const validatePassword = (password) => {
  return password.length > 8 && password.length < 20;
};

const registerUserHandler = async (request, context) => {
  try {
    context.log('Http function was triggered.');
    const userData = await request.json();
    context.log('User data:', userData);
    const validationResult = v.validate(userData, registerRequestSchema);

    if (!validationResult.valid) {
      return context.res = {
        body: JSON.stringify({ message: 'Validation error' }),
        status: 400,
      };

    }

    if (!validatePassword(userData.Password)) {
      return context.res = {
        body: JSON.stringify({ message: 'Password is not valid' }),
        status: 403,
      };
    }

    if (!await isUniqueEmail(userData.Email)) {
      context.log('Email already exists:', userData.Email);
      return context.res = {
        body: JSON.stringify({ message: 'Email already exists' }),
        status: 400,
      };
    }

    const userDetail = await createUserDetail(userData);
    const result = await registerUser(userDetail);
    console.log('Result:', result.insertedId);
    // const token = await generateToken({ id: result.insertedId }, context);
    // console.log("🚀 ~ file: registerUser.js:58 ~ registerUserHandler ~ token:", token)
   

    return context.res = {
      body: JSON.stringify({ message: 'Successfully created!!!!' }),
      status: 201,
    };

  } catch (error) {
   return context.res = {
      body: JSON.stringify({ message: 'Registration failed' }),
      status: 500,
    };

  }
};

module.exports = registerUserHandler;

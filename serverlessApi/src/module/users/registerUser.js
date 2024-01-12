const Validator = require('jsonschema').Validator;

const { registerRequestSchema } = require('../schemas/usersSchema');

const v = new Validator();

const registerUserHandler = async (request, context) => {
  let data = {
    message: 'Welcome to Azure Functions!'
  };

  try {
    const response = await request.json();
    context.log('Received response:', response);

    const result = v.validate(response, registerRequestSchema);
    context.log("🚀 ~ registerUserHandler ~ result:", result)
    

    if (!result.valid) {
      return {
        body: JSON.stringify({ message: 'Validation error' }),
        status: 400,
      };
    }else{
      return {
        body: JSON.stringify({ message: 'Validation success' }),
        status: 202,
      };
    }
  } catch (error) {
    context.log('Error in Azure Function:', error);

    return {
      body: JSON.stringify(message),
      status: 501,
    };
  }
};

module.exports = registerUserHandler;

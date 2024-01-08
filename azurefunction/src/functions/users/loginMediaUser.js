const { signUpWithGoogleSchema} = require('../schemas/usersSchema');
const { validateRequest } = require('../utils/schemaValidator');
const Validator = require('jsonschema').Validator;

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
    }
    
    return context.res ={ 
        body: JSON.stringify({ message: 'Finally validation passed' }),
        status: 200,
    }
}

module.exports = loginMediaUserHandler;
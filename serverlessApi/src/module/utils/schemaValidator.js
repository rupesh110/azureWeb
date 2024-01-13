import { Validator } from 'jsonschema';

const v = new Validator();

const validateRequest= async (request, schema) => {
    const userData = await request.json();
    
    const validationResult = v.validate(userData, schema);

    if (!validationResult.valid) {
        throw new Error('Validation failed: ' + JSON.stringify(validationResult.errors));
    }
    return userData;
}


export { validateRequest };
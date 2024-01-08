const loginRequestSchema = {
    type: 'object',
    properties: {
        Email: { type: 'string' },
        Password: { type: 'string' },
    },
    required: ['Email', 'Password'], // Align with the actual properties
};

const registerRequestSchema = {
    type: 'object',
    properties: {
        FullName: { type: 'string' },
        Email: { type: 'string' },
        Password: { type: 'string' },
    },
    required: ['FullName', 'Email', 'Password'],
};

const signUpWithGoogleSchema = {
    type: 'object',
    properties: {
        FullName: { type: 'string' },
        Email: { type: 'string' },
        uid: { type: 'string' },
       // DisplayName: { type: 'string' },
    },
    required: ['FullName', 'Email', 'uid'],

}

module.exports = { loginRequestSchema, registerRequestSchema, signUpWithGoogleSchema };

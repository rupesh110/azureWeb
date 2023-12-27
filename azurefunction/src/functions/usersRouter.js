const {app } = require('@azure/functions');

const loginUserHandler = require('./users/loginUser');
const testing = require('./users/testing');
const registerUserHandler = require('./users/registerUser');

app.http('register', {
    route: 'users/register',
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: registerUserHandler,
});

app.http('login', {
    route: 'users/login',
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: loginUserHandler,
});


app.http('testing', {
    methods: ['GET'],
    handler: testing,
})


const {app } = require('@azure/functions');

const loginUserHandler = require('./users/loginUser');
const testing = require('./users/testing');
const registerUserHandler = require('./users/registerUser');
const getUserFullNameHandler = require('./users/userFullname');
const loginMediaUserHandler = require('./users/loginMediaUser');

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

app.http('loginWithGoogle', {
    route: 'users/loginWithGoogle',
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: loginMediaUserHandler,
})

app.http('getUserFullName', {
    route: 'users/getUserFullName',
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: getUserFullNameHandler
});

app.http('testing', {
    methods: ['GET'],
    handler: testing,
})


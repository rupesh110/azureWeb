import { app } from '@azure/functions';

import registerUserHandler from '../module/users/registerUser.js';
import loginUserHandler from '../module/users/loginUser.js';
import loginMediaUserHandler from '../module/users/loginMediaUser.js';
import getUserFullNameHandler from '../module/users/userFullname.js';

app.http('register', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'users/register',
    handler: registerUserHandler,
});

app.http('login', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'users/login',
    handler: loginUserHandler,
});

app.http('loginMedia', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'users/loginMedia',
    handler: loginMediaUserHandler,
});

app.http('userFullname', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'users/userFullname',
    handler: getUserFullNameHandler,
});

app.http("test", {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world loosers';

        return { body: `Hello, ${name}!` };
    }
})
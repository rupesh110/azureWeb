const {app } = require('@azure/functions');

const testing = require('../module/users/testing.js');
const registerUserHandler = require('../module/users/registerUser.js');
// // const printHelper = require('../module/components/helper1.js');
// const getUserFullNameHandler = require('../module/users/userFullname.js');

app.http('testing', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: testing,
})

app.http('testing2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'testing 2';

        return { body: `Hello, ${name}!` };
    }
})

app.http('register', {
    methods: ['GET','POST'],
    authLevel: 'anonymous',
    handler: registerUserHandler,
});
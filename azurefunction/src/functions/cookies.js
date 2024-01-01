const { app } = require('@azure/functions');
const { v4: uuidv4 } = require('uuid');

app.http('cookies', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (context, req) => {
        const userCookie = `user=John Doe; Max-Age=${7 * 24 * 60 * 60}; Path=/`;
  
        context.res = {
          status: 200,
          headers: {
            'Set-Cookie': userCookie,
          },
          body: 'Cookie set!',
        };
    }
});

const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
       

        return { body: `Hello, wordl!!` };
    }
});

app.http('httpTrigger2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
      context.log(`Http function processed request for url here "${request.url}"`);
  
      const name = request.query.get('name') || (await request.text()) || 'Again2';
  
      const jsonResponse = {
        message: `Hello, ${name}!`,
      };
  
      return {
        body: JSON.stringify(jsonResponse),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    },
  });
  
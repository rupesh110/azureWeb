const { app } = require('@azure/functions');


app.http('hahha', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query['name'] || (await request.text()) || 'dump fuck';

        return { body: `Hello, ${name}!` };
    }
});


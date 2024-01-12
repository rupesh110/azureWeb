const { app } = require('@azure/functions');

app.http('freshStart', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world loosers';

        return { body: `Hello, ${name}!` };
    }
});

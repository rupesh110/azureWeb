const { app } = require('@azure/functions');
const { connectToMongo, createDocument, getDocuments } = require('./database/mongoConnection');

app.http('trying', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        let name;
        context.log("this is shit " + context);
        try {
            context.log(`Http function processed request for url "${request.url}"`);
            name = await request.json() || 'world';
            const database = 'test';
            const collection = 'test';
            const data = { name };
            const result = await createDocument(database, collection, data);

            context.res = {
                body: JSON.stringify(name),
                status: 200,
            };
        } catch (e) {
            if (context && context.log && context.log.error) {
                context.log.error(e);
            } else {
                console.error(e); // Fallback in case log is not available
            }
            context.res = {
                body: 'error',
                status: 500,
            };
        }
        return context.res;
    }
});


app.http('helloWorld1', {
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        return { body: 'Hello, world!' };
    }
});

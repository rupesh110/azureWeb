const { app } = require('@azure/functions');


app.http('httpTrigger4', {
    
    handler:  async (context, req) => 
    context.res = {
        status: 200,
        body: 'Hello, world!'
    }
})


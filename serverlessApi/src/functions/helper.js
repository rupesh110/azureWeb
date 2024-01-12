const { app } = require('@azure/functions')

const printHelper = require('../module/components/helper1.js');

app.http('helper', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: printHelper 
    
})


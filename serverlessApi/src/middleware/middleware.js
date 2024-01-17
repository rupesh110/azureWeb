// middleware.js

module.exports = async function (context, req) {
    // Set global headers
    context.res = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace * with the specific origin you want to allow
        'Access-Control-Allow-Methods': 'GET, POST', // Add other allowed HTTP methods
        'Access-Control-Allow-Headers': 'Content-Type', // Add other allowed headers
      },
    };
  
    // Continue processing to the next step in the pipeline
    context.done();
  };
  
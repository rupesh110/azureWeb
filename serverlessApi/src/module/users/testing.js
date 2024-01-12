const { app } = require('@azure/functions');

const testing = async (request, context) => {
    const apiResponse = "Welcome losers";

    // Ensure context.res is defined before accessing its properties
    console.log(context);
    return context.res = {
        status: 201,
        body: JSON.stringify({ message: apiResponse }),
    };   
};

module.exports = testing;

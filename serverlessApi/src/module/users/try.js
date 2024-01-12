const tryAzure = async (request, context) => {
    try {
        const sum = 10 + 1000;
        const response = `Welcome to Azure Functions! ${sum}`;

        const jsonResponse = {
            message: response,
        };

        context.log('Sending response:', jsonResponse);

        return {
            body: JSON.stringify(jsonResponse),
            status: 202,
        };
    } catch (error) {
        context.log.error('Error in Azure Function:', error);
        return {
            body: JSON.stringify({ error: 'Internal Server Error' }),
            status: 500,
        };
    }
};

module.exports = tryAzure;

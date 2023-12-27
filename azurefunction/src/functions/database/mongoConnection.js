const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://admin:Password@cluster0.6pm48op.mongodb.net/?retryWrites=true&w=majority";


async function connectToMongo() {
    let client;
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
    }
    return client;
}

module.exports = { connectToMongo};
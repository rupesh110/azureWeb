const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://admin:Password@cluster0.6pm48op.mongodb.net/?retryWrites=true&w=majority";
let client;

async function connectToMongo() {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true});
        await client.connect();
    }
    return client;
}

async function createDocument(databaseName, collectionName, data) {
    const client = await connectToMongo();
    console.log("Connected correctly to server");
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
    } finally {
        await client.close();
    }
}

async function getDocuments(databaseName, collectionName) {
    const client = await connectToMongo();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    return collection.find().toArray();
}

module.exports = { connectToMongo, createDocument, getDocuments };
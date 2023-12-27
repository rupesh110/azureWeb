const { connectToMongo } = require('./mongoConnection');

const defaultDatabase = 'test'; // Default database name
const defaultCollection = 'users'; // Default collection name

async function createDocument(data, databaseName = defaultDatabase, collectionName = defaultCollection) {
    const client = await connectToMongo();
    console.log("Connected correctly to server ");
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
    } finally {
        await client.close();
    }
}

async function getDocuments(databaseName = defaultDatabase, collectionName = defaultCollection) {
    const client = await connectToMongo();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    return collection.find().toArray();
}

async function registerUser(userDetail, databaseName = defaultDatabase, collectionName = defaultCollection) {
    const client = await connectToMongo();
    console.log("Connected correctly to server registerUser");
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        const result = await collection.insertOne(userDetail);
        return result;
    } catch (error) {
        console.error('Error in registerUser:', error);
        throw error; // Re-throw the error to handle it in the calling function
    } finally {
        if (client) {
            await client.close();
        }
    }
}



async function loginUser(userDetail, databaseName = defaultDatabase, collectionName = defaultCollection) {
    const client = await connectToMongo();
    console.log("Connected correctly to server loginUser");
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.findOne({ Email: userDetail.Email});

        return result;
    } catch (error) {
        console.error('Error in loginUser:', error);
        throw error; // Re-throw the error to handle it in the calling function
    } finally {
        if (client) {
            await client.close();
        }
    }
}

async function isUniqueEmail(email, databaseName = defaultDatabase, collectionName = defaultCollection) {
    const client = await connectToMongo();
    console.log("Connected correctly to server isUniqueEmail");
    
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.findOne({ Email: email });

        return !result; // Return true if email is unique, false if already exists
    } finally {
        await client.close();
    }
}

module.exports = { createDocument, getDocuments, registerUser, loginUser, isUniqueEmail };

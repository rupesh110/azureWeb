const {connectToMongo} = require('./mongoConnection');
const { verifyToken } = require('../utils/usersValidate');

const defaultDatabase = 'test'; // Default database name
const defaultCollection = 'users'; // Default collection name

async function getUsersFullname(databaseName = defaultDatabase, collectionName = defaultCollection, token) {
    const client = await connectToMongo();
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    const userDetail = collection.findOne()

    return collection.find().toArray();
}

module.exports = {
    getUsersFullname,
}
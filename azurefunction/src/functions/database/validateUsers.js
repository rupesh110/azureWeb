const { connectToMongo } = require('./mongoConnection');
const { verifyToken } = require('../utils/usersValidate');
const { ObjectId } = require('mongodb'); // Import ObjectId from the MongoDB driver

const defaultDatabase = 'test'; // Default database name
const defaultCollection = 'users'; // Default collection name

async function getUsersFullname(userid, databaseName = defaultDatabase, collectionName = defaultCollection) {
    try {
        const client = await connectToMongo();
        console.log("getUsersFullname connected to mongo", databaseName, collectionName);

        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        // Convert userid to ObjectId if it's not already
        const objectId = ObjectId.isValid(userid) ? new ObjectId(userid) : userid;

        const userDetail = await collection.findOne({ _id: objectId });
        console.log("User details from db:", userDetail);

        return userDetail.FullName;
    } catch (error) {
        console.log("Error in getUsersFullname:", error.message);
        throw error; 
    }
}

module.exports = {
    getUsersFullname,
};

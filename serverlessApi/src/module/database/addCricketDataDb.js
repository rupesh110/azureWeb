import connectToMongo from "./mongoConnection.js";

const defaultDatabase = "test"; // Default database name
const defaultCollection = "schedule"; // Default collection name

const addDataDb = async (data, collectionName= defaultCollection, databaseName= defaultDatabase) => {
    const client = await connectToMongo();
    console.log("Connected correctly to the server");

    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Delete existing documents in the collection
        const deleteResult = await collection.deleteMany({});

        const result = await collection.insertMany(data);

        return result;
    } catch (err) {
        console.error("Error adding cricket team data:", err);
        return err; // Returning the error object
    } finally {
        await client.close(); // Make sure to close the MongoDB client connection
    }
}


const getDataFromDb = async (collectionName = defaultCollection, databaseName = defaultDatabase) => {
    const client = await connectToMongo();
    console.log("Connected correctly to the server");

    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Use toArray() to get all documents from the cursor
        const result = await collection.find().toArray();

        console.log("🚀 ~ getCricketTeamHandler ~ response from db", result);
        return result;
    } catch (err) {
        console.error("Error fetching cricket team data:", err);
        return err; // Returning the error object
    } finally {
        await client.close(); // Make sure to close the MongoDB client connection
    }
};
export {addDataDb, getDataFromDb};
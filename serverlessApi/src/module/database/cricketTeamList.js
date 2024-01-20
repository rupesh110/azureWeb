import connectToMongo from './mongoConnection.js';

const defaultDatabase = 'test'; // Default database name
const defaultCollection = 'cricketTeam'; // Default collection name

const addCricketTeam = async (data, databaseName = defaultDatabase, collectionName = defaultCollection) => {
    const client = await connectToMongo();
    console.log("Connected correctly to the server");
    const testTeams = ["India", "Australia", "England", "New Zealand", "Pakistan", "South Africa", "Sri Lanka", "West Indies", "Afghanistan", "Bangladesh", "Zimbabwe", "Ireland"];
    const odiTeams = ["Nepal", "Oman", "Netherlands", "Scotland", "UAE", "USA", "Papua New Guinea", "Namibia"];

    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        // Delete existing documents in the collection
        const deleteResult = await collection.deleteMany({});

        data.forEach((element) => {
            if (testTeams.includes(element.teamName)) {
                element.status = "Test";
            } else if (odiTeams.includes(element.teamName)) {
                element.status = "Odi";
            } else {
                element.status = "Associate";
            }
        });

        // Filter out elements with a size of 2 (if needed)
        data = data.filter((element) => {
            const sizeArray = Object.keys(element).length;
            return sizeArray !== 2;
        });

        // Insert new data into the collection
        const result = await collection.insertMany(data);

        return result;
    } catch (err) {
        console.error("Error adding cricket team data:", err);
        return err; // Returning the error object
    } finally {
        await client.close(); // Make sure to close the MongoDB client connection
    }
};
const getCricketTeam = async (databaseName = defaultDatabase, collectionName = defaultCollection) => {
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


export { addCricketTeam, getCricketTeam };

import { MongoClient, ObjectId } from 'mongodb';

const uri = "mongodb+srv://admin:Password@cluster0.6pm48op.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = async() => {
    let client;
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
    }
    return client;
}

export default connectToMongo;
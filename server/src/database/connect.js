import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

let mongoClient = null;
let mongoConnection = null;

export async function initMongoDb() {
  try {
    mongoClient = new MongoClient(MONGO_URL);
    await mongoClient.connect();
    mongoConnection = mongoClient.db(COLLECTION_NAME);

    console.log("The connection has been successfully established ;)");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

export async function getDB() {
  if (!mongoConnection) {
    if (!mongoClient) {
      mongoClient = new MongoClient(MONGO_URL);
      await mongoClient.connect();
    }
    mongoConnection = mongoClient.db(DB_NAME);
  }
  return mongoConnection;
}

export async function closeConnection() {
  if (mongoClient) {
    await mongoClient.close();
    mongoClient = null;
    mongoConnection = null;
  }
}

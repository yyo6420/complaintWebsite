import express from "express";
import morgam from "morgan";
import { initMongoDb, getDB } from "./src/database/connect.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(async (request, response, next) => {
  request.mongoConnection = await getDB();
  next();
});

app.use(morgam("tiny"));

app.get("/", async (request, response) => {
  response.json({
    message: "Welcome to MongoDB Comlaints List API",
    version: "1.0.0",
  });
});

app.listen(PORT, async () => {
  await initMongoDb();
  console.log(`listening on port ${PORT}`);
});
